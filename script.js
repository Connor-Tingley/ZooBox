$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar").addClass("blue");
    } else {
        $(".navbar").removeClass("blue");
    }
});