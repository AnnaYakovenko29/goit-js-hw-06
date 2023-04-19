const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');
let number = 0;

decrementBtnEl.addEventListener('click', () => {
number -= 1;
counterValue.textContent = number;
console.log(event);
});

incrementBtnEl.addEventListener('click', () => {
number += 1;
counterValue.textContent = number;
console.log(number);
});
