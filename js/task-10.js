const numberRef = document.querySelector('#controls > input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const containerBoxesRef = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    const boxes = [];
    let size = 30;
    for (let i = 1; i <= amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = size + 'px';
        box.style.height = size + 'px';
        box.style.backgroundColor = getRandomHexColor();

        boxes.push(box);

        size += 10;
    }

    containerBoxesRef.append(...boxes);
}

function destroyBoxes() {
    containerBoxesRef.innerHTML = '';
}

createBtnRef.addEventListener('click', () => createBoxes(numberRef.value));

destroyBtnRef.addEventListener('click', destroyBoxes);
