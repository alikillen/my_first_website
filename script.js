console.log('hello world');

// this is some javascript code from


function toggleMenu() {
  var mobileNav = document.querySelector(".mobile-nav");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
  console.log("toggle!");
}