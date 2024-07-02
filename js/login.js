let emailSign = document.querySelector('#email-sign');
let passwordSign = document.querySelector('#password-sign');
let submitSign = document.querySelector('#submit');
let errorEmailSign = document.getElementById('error-email-=sign');
let errorPasswordSign = document.querySelector('#error-password-sign');

// Добавление обработчика события клика на кнопку Submit
submitSign.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей
    const emailSignValue = emailSign.value;
    const passwordSignValue = passwordSign.value;

    // Проверяем поля на пустоту
    if (emailSignValue.trim() === '') {
        errorEmailSign.textContent = 'Поле Email не может быть пустым';
    } else {
        errorEmailSign.textContent = '';
    }

    if (passwordSignValue.trim() === '') {
        errorPasswordSign.textContent = 'Поле Password не может быть пустым';
    } else {
        errorPasswordSign.textContent = '';
    }

    console.log('Email:', emailSignValue);
    console.log('Password:', passwordSignValue);

    

});