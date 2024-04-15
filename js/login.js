var username = document.querySelector('#username');
var password = document.querySelector('#password');

let buttonLogin = document.querySelector("#btn-login");

//load localStorage to html
let users = JSON.parse(localStorage.getItem('data')) || [];

//Login and move to home page if success and change name in home page
buttonLogin.addEventListener('click', checkLogin);

// checkLogin
function checkLogin() {
    let user = users.find(user => user.username === username.value && user.password === password.value);
    if (user) {
        alert('Đăng nhập thành công');
        window.location.href = './HomePage.html';
    } else {
        alert('Tài khoản hoặc mật khẩu không chính xác');
    }
}

// checkLogin when open login page
function checkLoginWhenOpen() {
    let user = users.find(user => user.username === username.value && user.password === password.value);
    if (user) {
        let name = user.username;
        document.querySelector('#login').innerHTML = name;
    }
}