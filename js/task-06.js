const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    const { value, dataset, classList } = event.currentTarget;

    if (value.length === Number(dataset.length)) {
        classList.add('valid');
        classList.remove('invalid');
    } else {
        classList.add('invalid');
        classList.remove('valid');
    }
});
