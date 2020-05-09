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



  $( "#clickme" ).click(function() {
    $( "#block" ).toggle( "slow", function() {
      // Animation complete.
    });
  });

  $(document).click(function(){
    $("button").toggle( "slow", function(){
      $("#showProject").toggle();
    });
  });

  $(function () {
    $('#showProject').removeClass('hidden');
});