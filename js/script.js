// navbar-scroll.js

window.onscroll = function() {checkScroll()};

function checkScroll() {
  var navbar = document.querySelector('.header_section');
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add('sticky-nav');
  } else {
    navbar.classList.remove('sticky-nav');
  }
}
