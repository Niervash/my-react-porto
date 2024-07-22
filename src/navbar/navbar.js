// Add smooth scrolling to all links inside the navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-anim").style.top = "0";
  } else {
    document.getElementById("navbar-anim").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}
