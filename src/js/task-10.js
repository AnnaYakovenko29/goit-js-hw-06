function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', (event) => {
  const divArr = []
  let width =20
  let height = 20
  for(let i = 1; i <= input.value; ++i){
    width +=10
    height +=10
    const div = document.createElement('div')
    div.style.height = `${height}px`
    div.style.width = `${width}px`
    div.style.backgroundColor = getRandomHexColor()
    divArr.push(div)
    
  }
  boxes.append(...divArr)
})

destroyBtn.addEventListener('click', ()=>{
  boxes.innerHTML = ''
})