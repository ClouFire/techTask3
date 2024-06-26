const input = document.querySelector('.rectangle');

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