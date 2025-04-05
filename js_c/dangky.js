// lấy element 
const formres = document.getElementById("formres");
const nameelement = document.getElementById("name");
const fullnameElement = document.getElementById("fullname");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmpasswordElement = document.getElementById("confirmpassword");


const roleelement = document.getElementById('role');


const roleError = document.getElementById('roleerror');

const fullnameerror = document.getElementById("fullnameerror");
const emailerror = document.getElementById("emailerror");
const passworderror = document.getElementById("passworderror");
const confirmpassworderror = document.getElementById("confirmpassworderror");


// lấy dữ liệu từ local
const userlocal = JSON.parse(localStorage.getItem("user")) || [];


// lấy ra 
formres.addEventListener("submit", function(e) {
    e.preventDefault();

    // Reset error messages
    fullnameerror.style.display = "none";
    emailerror.style.display = "none";
    passworderror.style.display = "none";
    confirmpassworderror.style.display = "none";
    roleError.style.display = "none";

    // Validate username length (max 9 characters)
    if (nameelement.value.length > 9) {
        nameelement.nextElementSibling.style.display = "block";
        nameelement.nextElementSibling.innerHTML = "TÊN ĐĂNG NHẬP TỐI ĐA 9 KÝ TỰ";
        return; // Stop form submission
    }

    // Validate password match
    if (passwordElement.value !== confirmpasswordElement.value) {
        confirmpassworderror.style.display = "block";
        confirmpassworderror.innerHTML = "MẬT KHẨU KHÔNG KHỚP";
        return;
    }

    // Validate role selection
    if (!roleelement.value) {
        roleError.style.display = 'block';
        return;
    }

    // Submit form if all validations pass
    if (nameelement.value && fullnameElement.value && emailElement.value && 
        passwordElement.value && confirmpasswordElement.value && 
        passwordElement.value === confirmpasswordElement.value) {
        
        const user = {
            id: Math.ceil(Math.random() * 100000000),
            name: nameelement.value,
            fullname: fullnameElement.value,
            email: emailElement.value,
            password: passwordElement.value,
            role: roleelement.value
        };

        userlocal.push(user);
        localStorage.setItem("user", JSON.stringify(userlocal));

        setTimeout(function() {
            window.location.href = "dangnhap.html";
        }, 1000);
    }
});