const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatoes',
    'Herbs',
    'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

function makeIngredient(name) {
    const ingredient = document.createElement('li');
    ingredient.classList.add('item');
    ingredient.textContent = name;

    return ingredient;
}

const ingredientsItemsRefs = ingredients.map(makeIngredient);
ingredientsListRef.append(...ingredientsItemsRefs);
