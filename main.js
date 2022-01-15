//JavaScript

const someElement = (element) => document.querySelector(element);

someElement('.mobile-menu').addEventListener('click', () => {
  someElement('header').classList.toggle('active')
})
  


