const input = document.querySelector('.abo');

input.onclick = () => {
  if (input.innerHTML === 'На меня кликнули...') {
    input.innerHTML = 'Я прямоугольник';
    input.classList.toggle('red')
  } else {
    input.innerHTML = 'На меня кликнули...';
    input.classList.toggle('red')
  }

};

console.log(input);