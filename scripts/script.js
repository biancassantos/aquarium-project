let menuMobile = document.querySelector('.mobile-menu');
let menuMobileBtn = document.querySelector('#mobile-menu-btn')
let closeBtn = document.querySelector('.mobile-menu-close-btn');
let overlay = document.querySelector('.overlay');

menuMobileBtn.addEventListener('click', () => {
    menuMobile.classList.add('open-menu');
})

closeBtn.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu')
})

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu')
})

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('open-menu')
})