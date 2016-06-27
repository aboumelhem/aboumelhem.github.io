$(document).ready(function(){
    lastElementTop = $('#timeline-events .anitem:last-child').position().top ;
    scrollAmount = lastElementTop - 200 ;
    
$('#listofstuff').animate({scrollTop: scrollAmount},1000);
});

