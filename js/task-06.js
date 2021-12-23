const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', event => {
    const { value, dataset, classList } = event.currentTarget;

    if (value.length < dataset.length) {
        classList.add('invalid');
        classList.remove('valid');
    } else {
        classList.add('valid');
        classList.remove('invalid');
    }
});
