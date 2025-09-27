console.log('hello world');

// this is some javascript code from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

// just simple to toggle the menu on and off, please mess around with it if you like


function toggleMenu() {
  var mobileNav = document.querySelector(".mobile-nav");

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    // mobileNav.animate([
    //   { height: 'auto' }, // Start state
    //   { height: '0px' }  // End state
    // ], {
    //   duration: 500, // Animation duration in milliseconds
    //   easing: 'ease-in-out',
    //   fill: 'forwards' // Keep the end state after animation
    // });
  } else {
    mobileNav.style.display = "block";
    // mobileNav.animate([
    //   { height: '0px' }, // Start state
    //   { height: 'auto' }  // End state
    // ], {
    //   duration: 500, // Animation duration in milliseconds
    //   easing: 'ease-in-out',
    //   fill: 'forwards' // Keep the end state after animation
    // });
  }


  console.log("toggle!");
}