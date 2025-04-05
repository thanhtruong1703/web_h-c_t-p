// element 
const loginform = document.getElementById("loginform");
const nameelement = document.getElementById("name");
const passwordElement = document.getElementById("password");
const errorelement = document.getElementById("error");

// lắng nghe sự kiện submit đăng nhập tài khoản 
// const loginform = document.querySelector('loginform'); // Thay '#element-id' bằng selector của bạn

// if (loginform) {
//   loginform.addEventListener('click', function () {
//     console.log('Element clicked!');
//   });
// } else {
//   console.log("hallo");
// }


loginform.addEventListener("submit",function(e){

    // present event load trang
    e.preventDefault();

    // validate dữ liệu
    // lấy dữ liệu local về

    const userlocal = JSON.parse(localStorage.getItem("user")) || [];
    
    // tìm kiếm  email và pass  người dùng có tồn tại trên local 
    
    const finduser = userlocal.find( (user) => user.name  === nameelement.value && user.password === passwordElement.value);
    //console.log(finduser);

    if (!finduser){
        error.style.display = "block";
    } else {
        localStorage.setItem("userlogin",JSON.stringify(finduser));
        if (finduser.role === "STUDENT"){window.location.href = "indexhs.html";}
        else {window.location.href = "indexgv.html";}
    }
});


