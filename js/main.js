'use strict'



document.addEventListener('DOMContentLoaded', function () {

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





    const form = document.getElementById('form')
    form.addEventListener('submit', formSend)



    function formValidate(form) {
        let error = 0
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]
            formRemoveError(input)


            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    console.log('123');
                    formAddError(input)
                    error++
                    console.log(error)
                }
            } else if (
                input.getAttribute('type') === 'checkbox' &&
                input.checked === false
            ) {

                formAddError(input)
                error++
            } else {
                if (input.value === '') {

                    formAddError(input)
                    error++
                }
            }
        }
    }

    async function formSend(e) {
        e.preventDefault()

        let error = formValidate(form)

        if (error === 0) {
            let formData = new FormData(form);


            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: formData,
                headers: {
                    'Access-Control-Allow-Origin': "*"
                }
            })
                .then(res => {
                    res.json()
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }

    // плавная прокрутка


    const formSmooth = document.getElementById('form-wrap');
    const btnSmooth = document.getElementById('description-button');

    function mainScrolling() {
        formSmooth.scrollIntoView({ behavior: "smooth" });
    }

    btnSmooth.addEventListener("click", mainScrolling);
})


