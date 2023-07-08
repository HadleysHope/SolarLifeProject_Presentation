// JavaScript code to toggle the navigation menu
document.getElementById("nav-toggler").addEventListener("click", function() {
    var navMenu = document.getElementById("navbarNav");
    navMenu.classList.toggle("collapsed-nav");
    navMenu.classList.toggle("expanded-nav");
  });