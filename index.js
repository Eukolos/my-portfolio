//! Scrolling
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("darker");
  } else {
    navbar.classList.remove("darker")
  }
}