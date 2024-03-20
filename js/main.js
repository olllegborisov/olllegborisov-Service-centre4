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

if (window.matchMedia("(max-width: 767px)").matches) {
    function initWishSwiper() {
        new Swiper(".services__swiper", {
            autoplay: true,
            loop: true,
            centeredSlides: true,
            slidesPerView: 1.4,
            spaceBetween: 20,
            fadeEffect: {
                crossFade: true,
            },
        });
    }
    initWishSwiper()
}





document.querySelectorAll('.faq__question').forEach(item => {
    item.addEventListener('click', () => {

        const arrow = item;
        const content = item.nextElementSibling;


        if (content.style.maxHeight) {
            document.querySelectorAll('.faq__text').forEach(item => {
                item.style.maxHeight = null;
                item.style.opacity = null;
            })
            document.querySelectorAll('.faq__question').forEach(item => {
                item.classList.remove('_active');
            })
        } else {
            document.querySelectorAll('.faq__text').forEach(item => {
                item.style.maxHeight = null;
                item.style.opacity = null;
            })
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = 1;

            document.querySelectorAll('.faq__question').forEach(item => {
                item.classList.remove('_active');
            })
            arrow.classList.add('_active');
        }
    })
})

