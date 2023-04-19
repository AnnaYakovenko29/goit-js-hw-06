const categories = document.querySelector("ul").children.length;
console.log('Number of categories:', categories);

const items = document.querySelectorAll('li.item');
items.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
})