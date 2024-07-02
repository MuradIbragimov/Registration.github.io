let clientName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let submit = document.querySelector('#submit');
let errorName = document.querySelector('#error-name');
let errorEmail = document.querySelector('#error-email');
let errorPassword = document.querySelector('#error-password');
let errorConfirm = document.querySelector('#error-confirm-password');


let users = {};

clientName.value = '';
email.value = '';
password.value = '';
confirmPassword.value = '';

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', (event) => {
    event.preventDefault();

    const clientNameValue = clientName.value;
    const emailUser = email.value;
    const passwordUser = password.value;

    if (clientNameValue === '') {
        errorName.textContent = 'Поле UserName пользователя не может быть пустым';
    } else {
        errorName.textContent = '';
    } 

    if (emailUser === '') {
        errorEmail.textContent = 'Поле Email не может быть пустым';
    } else {
        errorEmail.textContent = '';
    }

    if (passwordUser === '') {
        errorPassword.textContent = 'Поле Password не может быть пустым';
    } else {
        errorPassword.textContent = '';
    }

    if (confirmPassword.value === '') {
        errorConfirm.textContent = 'Поле Confirm не может быть пустым';
    } else {
        errorConfirm.textContent = '';
    }

    if (passwordUser !== confirmPassword.value) {
        errorConfirm.textContent = 'Пароли не совпадают';
    }

    if (passwordUser.length < 6) {
        errorPassword.textContent = 'Пароль не может иметь меньше 6 символов';
    }

    const user = new User(clientNameValue, emailUser, passwordUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
});