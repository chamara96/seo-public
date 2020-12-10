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

    /*window.scrollBy({ 
        top: 500, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });*/


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
        //changeRootLink("/seo")
        //changeWebSiteLogo("./images/client_images/center_logo_new.webp")
        //changeWebSitetab("./images/client_images/center_logo_new.webp")
        /*ttp://chamaralabs.com/seo-server-testing-6/seo/*/
        /*$("#main_div_id").sectionsnap({
            'delay': 100,// time dilay (ms)
            'selector': ".section",// selector
            'reference': .9,// % of window height from which we start
            'animationTime': 400,// animation time (snap scrolling)
            'offsetTop': 0,// offset top (no snap before scroll reaches this position)
            'offsetBottom': 0// offset bottom (no snap after bottom - offsetBottom)
        });*/

        //========================================== Start Copy from assets/js/owl-custom.js file============================
        /* ======= Owl Carousel ======= */
        /* Ref: http://owlgraphic.com/owlcarousel/index.html */

        /* $("#home-slideshow").owlCarousel({
             autoplay: true,
             autoPlayTimeout: 6000,
             smartSpeed: 400,
             autoplayHoverPause: true,
             items: 1,
             loop: true
    
         });*/

        var owl = $('#home-slideshow');
        owl.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: false,
            rewind: true,

        });

        let i = 1

        var text1 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Find Best Offers <br> & Deals Near You</h2>
        <p class="intro" style="text-align: center">Find Best Offers, Deals, Cash <br> Vouchers and Businesses Near You
        </p> 
     </div>`
     
 

var text2 = `<div class="slide-down">
     <h2 class="title" style="font-weight: bold;">Un-conditional <br> Free Trial! </h2>
     <p class="intro" style="text-align: center">Get products and services <br> for FREE with NO CONDITIONS!
     </p> 
  </div>`

        var text3 = `<div class="slide-down">
     <h2 class="title" style="font-weight: bold;">Home Delivery <br> (Coming Soon)</h2>
     <p class="intro" style="text-align: center">Buy from your favourite stores <br> near you & Get Home Delivery
     </p> 
  </div>`

        var text4 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Welcome Gift</h2>
        <p class="intro" style="text-align: center">Register and get Rs 5,000 <br> Unconditional Cash Voucher Instantly
        </p> 
     </div>`

        var text5 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Work From Home <br> & Earn Money</h2>
        <p class="intro" style="text-align: center">Like, comment & share on social <br> media and EARN UNLIMITED MONEY
        </p> 
     </div>`

        var text6 = `<div class="slide-down">
        <h2 class="title" style="font-weight: bold;">Play with New Technology</h2>
        <p class="intro" style="text-align: center">Have fun with Augmented Reality, <br> unlock special Vouchers & Offers
        </p> 
     </div>`

     var text7 = `<div class="slide-down">
     <h2 class="title" style="font-weight: bold;">Win Spot Deals</h2>
     <p class="intro" style="text-align: center">Stand a chance to win <br> Mega Spot Deals with only Rs.10
     </p> 
  </div>`

        var texts = [ text1, text2, text3, text4, text5, text6, text7] 

        owl.on('changed.owl.carousel', function (event) {

            let i = event.item.index-4;
            if(i < 0){
                i = 7 + i;
            }
            $('#side-slideshow').empty();
            $('#side-slideshow').append(texts[i]);
            
        })


        var owl2 = $('#option-slideshow');
        owl2.owlCarousel({
            autoplay: true,
            autoPlayTimeout: 6000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            items: 1,
            loop: true,
            rewind: false,

        });
        //========================================== End Copy from assets/js/owl-custom.js file============================



        //========================================== Start Copy from js/spot.js file============================
        setSpotOwl();
        setIndustryOwl();
        //========================================== End Copy from js/spot.js file============================



        //========================================== Start Copy from js/client.js file============================
        $.ajax({
            url: "http://blog.chamaralabs.com/imagecarousel",
            // url: "http://127.0.0.1:5500/payloads/clients.json",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                merchants = res;

                destroySlick();
                setSlick();
            }
        });

        /*var jobs = [];
        $.ajax({
            url: "http://127.0.0.1:5500/payloads/jobs.json",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                jobs = res.data;
                // console.log(blogs)
               setJobs(jobs);
               
            

            }
        });*/
        var jobs = [];
        $.ajax({
            url: "http://blog.chamaralabs.com/careers/index_data",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                jobs = res.data;
                //console.log(jobs)
                setJobs(jobs);
                setJobOwl();

            }
        });

        var blogs = [];
        $.ajax({
            url: "http://blog.chamaralabs.com/article/posts/index_data_user",
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                blogs = res.data;
                // console.log(blogs)
                setBlogs(blogs);
                setBlogOwl();

            }
        });
        //========================================== End Copy from js/client.js file============================


    });




    //========================================== Start Copy from js/main.js file============================

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
            url: "http://blog.chamaralabs.com/sendmailcontact?name="+name+"&email="+email+"&subject="+subject+"&msgbody="+message,
            type: 'GET',
            dataType: 'json', // added data type
            success: function (res) {
                console.log("res" + res)
            }
        });
        

        return false;

    });

    /* Wow Initialize */
    // new WOW().init();
    //========================================== End Copy from js/main.js file============================

    /* Mobile menu dropdown */

    $("li.nav-item a").on("click", function () {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
        // $(this).find("i").toggleClass("fa-angle-down fa-angle-up");
    });

});