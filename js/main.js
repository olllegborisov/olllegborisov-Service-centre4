const burger = document.querySelector('.header__burger')
const burgerLine = document.querySelectorAll('.header__line')
console.log(burgerLine);

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    burgerLine.forEach((line) => {
        line.classList.toggle('active')
    })
})