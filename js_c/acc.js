// Lấy tên từ localStorage
//const username= localStorage.getItem('userButton');

let userlocal = JSON.parse(localStorage.getItem("userlogin")) || [];
//console.log(userlocal.name).userlocal;
document.getElementById('userButton').textContent = userlocal.name;
