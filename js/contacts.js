'use strict';

document.addEventListener('DOMContentLoaded', () => {


    // форма
    try {
        const form = document.getElementById('form2')
        form.addEventListener('submit', formSend)



        function formValidate(form) {
            let error = 0
            let formReq = document.querySelectorAll('._req')

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index]
                formRemoveError(input)


                if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
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

    } catch (error) {
        console.log(error);
    }


    // Отбивка в случае отправке данных из формы
    try {
        const button = document.querySelector('.form2__button');
        const close = document.querySelector('.pop-up-order__close');
        const popUp = document.querySelector('.pop-up-order');
        const background = document.querySelector('.pop-up-background');


        button.addEventListener('click', () => {
            popUp.classList.add('_active')
            background.classList.add('_active')
        });

        close.addEventListener('click', () => {
            popUp.classList.remove('_active')
            background.classList.remove('_active')
        });

        background.addEventListener('mousedown', () => {
            popUp.classList.remove('_active')
            background.classList.remove('_active')
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                background.classList.remove('_active')
                popUp.classList.remove('_active')
            }
        });

    } catch (error) {
        console.log(error);
    }
});


