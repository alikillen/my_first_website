console.log('hello world');

// this is some javascript code from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

// just simple to toggle the menu on and off, please mess around with it if you like


function toggleMenu() {
  var mobileNav = document.querySelector(".mobile-nav");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
  console.log("toggle!");
}