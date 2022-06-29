//JavaScript

// Add the active class to the header elements whenthe hamburger menu is clicked
const someElement = element => document.querySelector(element);

someElement('.mobile-menu').addEventListener('click', () => {
  someElement('header').classList.toggle('active')
});