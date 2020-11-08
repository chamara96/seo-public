$(document).ready(function () {

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
        loop: true,

    });


    var slides = [
        {title : 'Best Deals', intro : 'Find best offers, deals, discount vouchers and stores near you'},
        {title: 'Welcome Gift', intro : 'Register and get Rs 5,000 Unconditional Cash Voucher Instantly'},
        {title: 'Earn Money', intro : 'Like, comment & share on social media and EARN UNLIMITED MONEY'},
        {title: 'Play with new Technology', intro : 'Have Fun with Augmented Reality (AR), unlock special vouchers & offers with AR'},
        {title: 'Win Spot Deals', intro : 'Stand a chance to win Mega Spot Deals with only Rs.10'},
    ]

    let i = 1
    owl.on('changed.owl.carousel', function (event) {
        if(i==5) i = 0;

        var html = $('<div> \n\
        <h2 class="title" style="font-weight: bold; font-size: 50px">'+slides[i].title+'</h2> \n\
        <p class="intro">'+slides[i].intro+' \n\
        </p> \n\
     </div>');

     
                 
            
  /*$('.side-slideshow').slideUp(300, function() {
    $( this ).remove();
  });*/ 
  $('#side-slideshow').empty();          
  $('#side-slideshow').append(html);
  i++;
  // html.slideDown();
    })


    var owl2 = $('#option-slideshow');
    owl2.owlCarousel({
        autoplay: true,
        autoPlayTimeout: 6000,
        smartSpeed: 400,
        autoplayHoverPause: true,
        items: 1,
        loop: true,

    });

});