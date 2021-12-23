const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
    event.preventDefault();

    const { email, password } = formRef.elements;
    if (email.value === '' || password.value === '') {
        alert('Заполните все поля!');
        return;
    }

    const info = {
        email: email.value,
        password: password.value,
    };
    console.log(info);

    formRef.reset();
});
