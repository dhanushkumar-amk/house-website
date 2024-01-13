'use strict';
/**
 *
 * element toggle function
 *
 * **/
const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

/*
navbbar
*/

const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navbarCloseBtn = document.querySelector('[data-nav-close-btn]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navbarLinks = document.querySelectorAll('[data-navbar-link]');

const navElemArr = [overlay, navbarCloseBtn, navOpenBtn];

/*
close navbar
*/

for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener('click', function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
  window.scrollY >= 400
    ? header.classList.add('active')
    : header.classList.remove('active');
});
