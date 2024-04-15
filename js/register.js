const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.getElementById('Confirmpassword');
const email = document.querySelector('#email');


//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}
//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        return true;
    } else {
        showError(input, 'Email is not valid');
        return false;
    }
}
//check required fields
function checkRequired(inputArr) {
    let isRequired = true;
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = false;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        return false;
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        return false
    } else {
        showSuccess(input);
        return true;
    }
}
//check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        return false;
    } else {
        showSuccess(input2);
        return true;
    }
}
//get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//use localstorage to store data by json array
function storeData() {
    let data = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    let arr = [];
    if (localStorage.getItem('data') === null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('data'));
    }
    arr.push(data);
    localStorage.setItem('data', JSON.stringify(arr));
}

//Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (checkRequired([username, email, password, password2]) && checkLength(username, 3, 15) && checkLength(password, 6, 25) && checkEmail(email) && checkPasswordsMatch(password, password2)) {
        alert('Đăng ký thành công');
        storeData();
        window.location.href = './HomePage.html';
    } else {
        alert('Hãy điền đầy đủ thông tin và đúng theo yêu cầu');
    }
});