const controlRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

textRef.style.fontSize = controlRef.value + 'px';

controlRef.addEventListener('input', () => {
    textRef.style.fontSize = controlRef.value + 'px';
});
