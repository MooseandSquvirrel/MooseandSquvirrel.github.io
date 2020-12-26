$(window).on('scroll', function(e){ 
    var scroll = $(window).scrollTop();
    if(scroll > 10){
        $("#mobile_nav_checkbox").prop("checked", false);
        console.log("scroll: " + scroll);
    }
});