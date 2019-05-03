(function(){
	"use strict";
  var options = {
    strings: [ "burger 🍔", "pizza 🍕 ", "sushi 🍣", "taco 🌮", "pizza 🍕" ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
  }
  var typed = new Typed("#typed", options);
})();
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the documen
  function topFunction() {
    document.body.scrollDuration = 700;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
