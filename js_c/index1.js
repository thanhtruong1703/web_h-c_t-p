// Giả lập trạng thái đăng nhập (false = chưa đăng nhập, true = đã đăng nhập)
let isLoggedIn = false; // Thay đổi trạng thái này trong thực tế theo logic của bạn

// Lấy phần tử nút
const button = document.getElementById('TNKQ');

// Thêm sự kiện click vào nút
button.addEventListener('click', (event) => {
    if (!isLoggedIn) {
        // Nếu chưa đăng nhập, chặn hành động mặc định và chuyển hướng đến trang đăng nhập
        event.preventDefault();
        window.location.href = 'dangnhap.html'; // Đường dẫn đến trang đăng nhập
    } else {
        // Nếu đã đăng nhập, chuyển hướng đến trang trắc nghiệm
        window.location.href = 'java.html'; // Đường dẫn đến trang trắc nghiệm
    }
});

let isLoggedIn1 = false;
const button1 = document.getElementById('TNDS');

// Thêm sự kiện click vào nút
button1.addEventListener('click', (event) => {
    if (!isLoggedIn1) {
        // Nếu chưa đăng nhập, chặn hành động mặc định và chuyển hướng đến trang đăng nhập
        event.preventDefault();
        window.location.href = 'dangnhap.html'; // Đường dẫn đến trang đăng nhập
    } else {
        // Nếu đã đăng nhập, chuyển hướng đến trang trắc nghiệm
        window.location.href = '#'; // Đường dẫn đến trang trắc nghiệm
    }
});

let isLoggedIn2 = false;
const button2 = document.getElementById('TLN');

// Thêm sự kiện click vào nút
button2.addEventListener('click', (event) => {
    if (!isLoggedIn2) {
        // Nếu chưa đăng nhập, chặn hành động mặc định và chuyển hướng đến trang đăng nhập
        event.preventDefault();
        window.location.href = 'dangnhap.html'; // Đường dẫn đến trang đăng nhập
    } else {
        // Nếu đã đăng nhập, chuyển hướng đến trang trắc nghiệm
        window.location.href = '#'; // Đường dẫn đến trang trắc nghiệm
    }
});

let isLoggedIn3 = false;
const button3 = document.getElementById('KT');

// Thêm sự kiện click vào nút
button3.addEventListener('click', (event) => {
    if (!isLoggedIn3) {
        // Nếu chưa đăng nhập, chặn hành động mặc định và chuyển hướng đến trang đăng nhập
        event.preventDefault();
        window.location.href = 'dangnhap.html'; // Đường dẫn đến trang đăng nhập
    } else {
        // Nếu đã đăng nhập, chuyển hướng đến trang trắc nghiệm
        window.location.href = '#'; // Đường dẫn đến trang trắc nghiệm
    }
});
