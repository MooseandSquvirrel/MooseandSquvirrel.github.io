

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

$(document).ready( function () {
    var topofDiv = $("#about").offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > topofDiv){
           $("#pow_about").addClass('pow2start')
        }
    });
}) 