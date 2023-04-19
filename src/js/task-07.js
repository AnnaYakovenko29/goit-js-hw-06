const textInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

textInput.addEventListener('input', () => {
const textSize = textInput.value;
textSpan.style.fontSize = `${textSize}px`;
})