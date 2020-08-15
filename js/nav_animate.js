
// Navbar Slide in on scroll
$(document).ready( function () {
    var topofDiv = $("#logo").offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > topofDiv){
           $("#navbar_hidden").addClass('slideIn').removeClass('slideOut');
        }
        else{
            $("#navbar_hidden").addClass('slideOut').removeClass('slideIn');
        }
    });
}) 

// Pow effect on slide
$(document).ready( function () {
    var topofDiv = $("#about").offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > topofDiv){
           $("#pow_about").addClass('pow2start')
        }
    });
}) 

// Makes logo triangle permanently visible
$(document).ready( function () {
    setTimeout(function()
    { 
        $("#logo").css("visibility","visible");
    },
        2500);
})

// Makes logo h1/h2 permanently visible
$(document).ready( function () {
    setTimeout(function()
    { 
        $("#logo_h1").css("visibility","visible");
        $("#logo_h2").css("visibility","visible");
    },
        1200);
})
