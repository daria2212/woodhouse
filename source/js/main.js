// Menu button script
const menuBtn = document.querySelector(".toggle");
const menu = document.querySelector(".main-nav");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("toggle--closed");
  menuBtn.classList.toggle("toggle--opened");
  menu.classList.toggle("main-nav--closed");
  menu.classList.toggle("main-nav--opened");
});

// Slider script

$(".header-slider").slick({
  infinite: false,
  dots: true,
  speed: 500,
  prevArrow: '<img class="left" src="images/left.svg" width="20" height="15">',
  nextArrow:
    '<img class="right" src="images/right.svg" width="20" height="15">',
  infinite: true,
});

// Modal form script

let popupBtn = document.querySelector(".header__button");
let popup = document.querySelector(".modal-form");
let overlay = document.querySelector(".modal-overlay");
let close = document.querySelector(".modal-form__close");

popupBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function () {
  popup.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});

// Modal project script

let project = document.querySelectorAll(".projects__item").forEach((project) => {
    project.addEventListener("click", function () {
      popupProject.classList.add("modal-show");
      overlay.classList.add("overlay-show");
    });
});

let popupProject = document.querySelector(".modal-project");
let closeBtn = document.querySelector(".modal-project__close");

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupProject.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function () {
  popupProject.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupProject.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
  }
});
