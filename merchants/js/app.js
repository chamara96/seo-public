$(function ($) {
    $(window).on('load', function () {
        /*$('#logo-div').load('images/welcome-logo.svg');

        setTimeout(() => {
            svgdrawing();
        }, 300);

        setTimeout(() => {
            $("#logo-div").addClass("playanime");
            $("svg").addClass("playanime");
            $("#landingDiv").addClass("playanime");

        }, 1000);

        setTimeout(() => {
            $("#logo_img_div_desk").fadeIn(1000);
            $("#logo_img_div_mobi").fadeIn(1000);
        }, 6000);

        setTimeout(() => {

            $("#landingDiv").delay(1000).fadeOut(2000);
            $("#landingDiv").css("display", "none");

        }, 7000);*/


    });


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


    $(document).ready(function () {
        changeRootLink("/seo")
        // changeUserLink("../index.html")
        changeWebSiteLogo("./images/client_images/center_logo_new.webp")
        changeWebSitetab("./images/client_images/center_logo_new.webp")
        $('.tp-leftarrow').append('<i id="me_s_left" class="icon icon-left-arrow2"></i>')
        $('.tp-rightarrow').append('<i id="me_s_right" class="icon icon-right-arrow2"></i>')
        


        //========================================== Start Copy from js/spot.js file============================
        setSpotOwl();
        setIndustryOwl();
        setBottomOwl();
        //========================================== End Copy from js/spot.js file============================



        //========================================== Start Copy from js/client.js file============================
        $.ajax({
            url: "/imagecarousel",
            // url: "http://127.0.0.1:5500/payloads/clients.json",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                merchants = res;

                destroySlick();
                setSlick();
            }
        });

        var blogs = [];
        $.ajax({
            url: "/article/posts/index_data_merchent",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                blogs = res.data;
                // console.log(blogs)
                setBlogs(blogs);
                setOwl();

            }
        });
        //========================================== End Copy from js/client.js file============================


    });


    //========================================== Start Copy from js/main.js file============================
    /*Main Slideshow*/
    $(".tw-slider-area").owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: false,
        nav: true,
        dots: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        mouseDrag: false,
        touchDrag: true,
        smartSpeed: 1100,
        navText: ['<i class="icon icon-left-arrow2">', '<i class="icon icon-right-arrow2">'],
        responsive: {
            1024: {
                mouseDrag: true,
            }
        }
    });

    /*Testimonial Slider*/
    $(".tw-testimonial-carousel").owlCarousel({
        items: 1,
        loop: false,
        rewind: true,
        autoplay: false,
        nav: false,
        dots: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        mouseDrag: false,
    });

    /* Testimonial Slider */
    if ($(".testimonial-slider").length > 0) {
        $(".testimonial-slider").owlCarousel({
            items: 1,
            loop: false,
            rewind: true,
            autoplay: false,
            nav: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            smartSpeed: 900,
            navText: ["<i class='icon icon-left-arrow2'></i>", "<i class='icon icon-right-arrow2'></i>"],
        });
    };

    /* Testimonial Slider */
    if ($(".testimonial-carousel-gray").length > 0) {
        $(".testimonial-carousel-gray").owlCarousel({
            items: 2,
            margin: 20,
            loop: false,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
        });
    };
    /* Testimonial Box Carousel */
    if ($(".testimonial-box-carousel").length > 0) {
        $(".testimonial-box-carousel").owlCarousel({
            items: 2,
            margin: 20,
            loop: false,
            rewind: true,
            autoplay: false,
            nav: false,
            dots: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            mouseDrag: true,
            responsiveClass: true,
            smartSpeed: 900,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 2,
                }
            }
        });
    };

    /* Contact Form */
    $('#contact-form').submit(function () {

        var name = $('#name-2').val();
        var email = $('#email-2').val();
        var subject = $('#subject-2').val();
        var message = $('#message-2').val();

        body = {
            name : name,
            email : email,
            subject : subject,
            msgBody : message
        }

        $.ajax({
            url: "/sendmailcontact?name="+name+"&email="+email+"&subject="+subject+"&msgbody="+message,
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                console.log("res" + res)
            }
        });
        

        return false;

    });

    /* Wow Initialize */
    new WOW().init();
    //========================================== End Copy from js/main.js file============================

    /* Mobile menu dropdown */

    $("li.nav-item a").on("click", function () {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        // $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
    });


});