// document.getElementById("userButton").addEventListener("click", function () {
//     const menu = document.getElementById("floatingMenu");
//     menu.style.display = menu.style.display === "block" ? "none" : "block";
// });

// // Đóng menu khi nhấp ra ngoài
// window.addEventListener("click", function (event) {
//     const menu = document.getElementById("floatingMenu");
//     const button = document.getElementById("userButton");
//     if (event.target !== menu && event.target !== button) {
//         menu.style.display = "none";
//     }
// });


// Lấy phần tử nút và menu
let userButton = document.getElementById('userButton');
let floatingMenu = document.getElementById('floatingMenu');

// Thêm sự kiện click để toggle menu
userButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Ngăn chặn các sự kiện click khác ảnh hưởng
    if (floatingMenu.style.display === "none" || floatingMenu.style.display === "") {
        floatingMenu.style.display = "block"; // Hiển thị menu
    } else {
        floatingMenu.style.display = "none"; // Ẩn menu
    }
});

// Đảm bảo menu sẽ ẩn khi click ngoài
document.addEventListener('click', () => {
    floatingMenu.style.display = "none";
});

