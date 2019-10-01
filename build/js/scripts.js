'use strict';

var burger = document.querySelector('.burger');
var menu = document.querySelector('.nav__list');

var openBurger = function openBurger() {
  menu.classList.add('nav__list_active');
};

burger.addEventListener('click', openBurger);