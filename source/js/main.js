const menuBtn = document.querySelector('.toggle')
const menu = document.querySelector('.main-nav')

menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault()
    menuBtn.classList.toggle('toggle--closed')
    menuBtn.classList.toggle('toggle--opened')
    menu.classList.toggle('main-nav--closed')
    menu.classList.toggle('main-nav--opened')
});

$('.header-slider').slick({
    infinite: false,
    dots: true,
    speed: 500,
    prevArrow: '<img class="left" src="images/left.svg" width="20" height="15">',
    nextArrow: '<img class="right" src="images/right.svg" width="20" height="15">',
    infinite: true
});