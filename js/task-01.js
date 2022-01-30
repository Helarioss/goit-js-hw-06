const itemsRef = document.querySelectorAll('#categories > .item');

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(item => {
    const categoryRef = item.querySelector('h2');
    const elementsRef = item.querySelectorAll('li');
    console.log(
        `Category: ${categoryRef.textContent}\nElements: ${elementsRef.length}`,
    );
});
