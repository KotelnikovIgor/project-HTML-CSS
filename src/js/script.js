'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__list');

const openBurger = () => {
  menu.classList.add('nav__list_active');
}

burger.addEventListener('click', openBurger);
