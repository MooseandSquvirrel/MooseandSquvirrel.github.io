

$(document).ready( function () {
    var topofDiv = $("#d").offset().top;

    $(window).scroll(function(){
        if($(window).scrollTop() > topofDiv){
           $("#navbar_hidden").addClass('slideIn').removeClass('slideOut');
        }
        else{
            $("#navbar_hidden").addClass('slideOut').removeClass('slideIn');
        }
    });
}) 