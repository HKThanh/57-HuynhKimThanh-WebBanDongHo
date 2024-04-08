var username = document.querySelector('#username');
var password = document.querySelector('#password');

let buttonLogin = document.querySelector("#btn-login");

// get user
const getUser = async() => {
        const response = await fetch(apiUser);
        const data = await response.json();
        return data;
    }
    // login
buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "" || password.value == "") {
        alert("Please enter your username and password");
    } else {
        if (username.value == "admin" && password.value == "admin") {
            alert("Login success");
            var modal = document.querySelector(".login-modal");
            modal.style.display = "none";
            var login = document.querySelector("#login");
            login.outerHTML = '<a href="./ThongTinTaiKhoan.html" id="user">' + 'Chào mừng, ' + ' ' + user.username + '</a>';
        } else {
            alert("Login failed");
        }
    }
});