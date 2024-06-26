const input = document.querySelector('.rectangle');

//input.onclick = () => {
//  if (input.innerHTML === 'На меня кликнули...') {
//    input.innerHTML = 'Я прямоугольник';
//    input.classList.toggle('red')
//  } else {
//    input.innerHTML = 'На меня кликнули...';
//    input.classList.toggle('red')
//  }
//
//};

function change(event) {
    if (event.target.classList.contains('red')) {
        event.target.innerHTML = 'Я прямоугольник';
        event.target.classList.toggle('red');
    }
    else {
        event.target.innerHTML = 'На меня кликнули...';
        event.target.classList.toggle('red');
    }
}

input.addEventListener("click", change);
console.log(input);