//$(document).ready(function(){
//    alert("aaasdasdsd")
// });

 $(document).ready(function(){
     $("message").fadeIn('slow', function(){
        $("message").delay(5000).fadeOut();
     });
 });

 // Array of words
var words = ['CODER','UX DESIGNER','UI DESIGNER', 'STUDENT'];
// Function that executes every 2000 milliseconds
var t = setInterval(function() {
  // Random number generator
  var randomNumber = Math.round( Math.random() * (words.length-1) );
  // Change the word in the span for a random one in the array of words
  $('#changing').html( words[ randomNumber ] );
}, 5000);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });