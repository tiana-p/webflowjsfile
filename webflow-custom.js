<script>

  
$(document).ready(function() {
  
  $('.clock').text("20:00");
  countdown();
});
var interval;

function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.clock').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.clock').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}
$(document).ready(function() { 
  $('.innerpopupcontainer').fadeIn(1000); 
  $('.innerpopupcontainer').fadeTo("slow",0.9); 
     
});
$( ".close" ).click(function() {
  $( ".innerpopupcontainer" ).css("display", "none");
});
</script>
