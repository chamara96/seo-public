$(function ($) {
    

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function () {
            var topDistance = $(this).offset().top;
            if ((topDistance - 100) < scrollTop) {
                var sec = $(this).attr('menu-sec')
                // var active_1 = $('li[id='+sec+']');
                $('#newheader2 a').css('color', $(this).attr('data-color'));
                $('.menu-item').removeClass('active');
                $('li[id=' + sec + ']').addClass('active');
            }
        });
    });


    /* Back to top */
    /*$(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.back-to-top button').fadeIn();
        } else {
            $('.back-to-top button').fadeOut();
        }
    });

    $(".back-to-top button").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });*/


});