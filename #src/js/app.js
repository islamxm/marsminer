import * as flsFuncs from './modules/functions.js';
import header from './modules/header.js';
import menuToggle from './modules/menu.js';
import searchToggle from './modules/search.js';
import catalogFilter from './modules/catalogFilter.js';
import rangeSlider from './modules/rangeSlider.js';
import faq from './modules/faq.js';
import heroParallax from './modules/heroParallax.js';


document.addEventListener('DOMContentLoaded', () => {
  flsFuncs.isWebp();
  header();
  menuToggle();
  searchToggle();
  catalogFilter();
  rangeSlider();
  faq();
  heroParallax();
})