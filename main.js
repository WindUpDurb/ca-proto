"use strict";

const openMercuryNews = () => {
    window.open("http://www.mercurynews.com/2015/12/20/websites-help-california-motorists-beat-traffic-tickets/", "_blank", "height=1000px, width=1000px")
};

const showVideo = () => {
    document.getElementById("video-display").style.display = "block";
};

$(document).ready(function(){
    let scroll_start = 0;
    let startchange = $('#details');
    let offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#navbar').css('background-color', 'white');
            $(".nav-link").css("color", "#777");
        } else {
            $('#navbar').css('background-color', '#FF5722');
            $(".nav-link").css("color", "white");
        }
    });

    $(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});