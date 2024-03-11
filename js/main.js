function burger() {
    const burger = document.querySelector('.header__burger')
    const burgerLine = document.querySelectorAll('.header__line')
    const popupMob = document.querySelector('.header__popup-mob')
    let isAnimating = false;

    burger.addEventListener('click', () => {
        if (isAnimating) {
            return;
        }
        isAnimating = true;

        burger.classList.toggle('cross-js')
        popupMob.classList.toggle('active')
        burgerLine.forEach((line) => {
            line.classList.toggle('cross-js')
            setTimeout(() => {
                line.classList.toggle('helicopter-js')
                isAnimating = false;
            }, 500);
        })
    })
    burger.addEventListener('click', () => {
        if (burger.classList.contains('cross-js') !== true) {
            burgerLine.forEach((line) => {
                line.classList.add('transparent-js')
                setTimeout(() => {
                    line.classList.remove('transparent-js')
                }, 1);

            })
        }
    })

}
if (window.matchMedia("(max-width: 767px)").matches) {
    burger()
}
