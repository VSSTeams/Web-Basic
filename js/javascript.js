document.addEventListener("DOMContentLoaded", function() {
    const chatToggle = document.getElementById("chat-toggle");
    const chatWidget = document.getElementById("chat-widget");
    const chatBody = document.getElementById("chat-body");

    let sessionId = null;
    let isSessionInitialized = false; // Biến cờ để kiểm tra xem phiên đã được khởi tạo hay chưa

    // Bật/tắt hiển thị của widget chat khi nhấp vào toggle
    chatToggle.addEventListener("click", function() {
        chatWidget.classList.remove("hidden");
        // Khởi tạo phiên mới khi hiển thị widget
        initSession();
    });

    // Khởi tạo một phiên mới
    function initSession() {
        fetch("https://api.chatgpt.com/startSession", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "sk-proj-jK0aZ39Uiyv01JYI9PU5T3BlbkFJV7rEm6WAcDxCDKqVCsqS" // Mã API của bạn
            }
        })
        .then(response => response.json())
        .then(data => {
            sessionId = data.sessionId;
            isSessionInitialized = true; // Đánh dấu rằng phiên đã được khởi tạo thành công
        })
        .catch(error => console.error("Lỗi khi khởi tạo phiên:", error));
    }

    // Xử lý việc gửi tin nhắn
    const sendButton = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        displayMessage(userMessage, "user");
        // Gửi tin nhắn của người dùng đến API chỉ khi phiên đã được khởi tạo thành công
        if (isSessionInitialized) {
            sendMessageToAPI(userMessage);
        } else {
            console.error("Lỗi: Không thể gửi tin nhắn vì chưa khởi tạo phiên.");
        }
        userInput.value = "";
    });

   
// Gửi tin nhắn của người dùng đến API
function sendMessageToAPI(message) {
    fetch("https://api.chatgpt.com/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "sk-proj-jK0aZ39Uiyv01JYI9PU5T3BlbkFJV7rEm6WAcDxCDKqVCsqS" // Thay thế bằng mã API của bạn
        },
        body: JSON.stringify({
            sessionId: sessionId,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.message;
        displayMessage(botMessage, "bot");
    })
    .catch(error => console.error("Lỗi khi gửi tin nhắn:", error));
}
    // Hiển thị tin nhắn trong widget
    function displayMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        if (sender === "user") {
            messageElement.classList.add("user-message");
        } else {
            messageElement.classList.add("bot-message");
        }
        messageElement.innerText = message;
        chatBody.appendChild(messageElement);
        // Cuộn xuống cuối cùng để xem tin nhắn mới nhất
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Thêm các trình nghe sự kiện để thay đổi màu nền khi di chuột qua toggle chat
    chatToggle.addEventListener("mouseenter", function() {
        chatToggle.style.backgroundColor = "#45a049";
    });

    chatToggle.addEventListener("mouseleave", function() {
        chatToggle.style.backgroundColor = "#4ca8af";
    });
});