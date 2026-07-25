function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.widget p span');
const body = document.body;

button.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  
  color.textContent = randomColor;
}
