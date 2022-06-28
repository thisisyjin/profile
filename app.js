const $middle = document.querySelector('.middle');
const $middleLink = document.querySelector('.middle-link');
const $left = document.querySelector('.left');
const $right = document.querySelector('.right');

$middle.addEventListener('click', (e) => {
  e.preventDefault();
  $middle.classList.add('animated');
  $right.classList.add('animated');
  $left.classList.add('animated');
  $middleLink.classList.add('animated');
});
