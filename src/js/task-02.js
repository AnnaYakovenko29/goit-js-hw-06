const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

  const ingredientsArr = ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement('li');

    ingredientsItemEl.classList.add('item');

    ingredientsItemEl.textContent = ingredient;
    return ingredientsItemEl;
  })
  
  ingredientsEl.append(...ingredientsArr);

console.log(ingredientsEl);
