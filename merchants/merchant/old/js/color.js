$(function () {
    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function () {
            var topDistance = $(this).offset().top;
            if ((topDistance-100) < scrollTop) {
                $('#mymenu a').css('color', $(this).attr('data-color'));
            }
        });
    });
})