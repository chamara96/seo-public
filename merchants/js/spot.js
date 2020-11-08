$(document).ready(function () {

    setSpotOwl();
    setIndustryOwl();

   
});



function setSpotOwl(){
    var owl = $('#spot-list');
    owl.owlCarousel({
        items : 4,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsMobile : [479,1],
		loop:true,
        responsiveRefreshRate:0,
        autoplay: true,
        autoPlay:3000,
        smartSpeed: 1000,
        nav: true,
        stopOnHover:false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0:{
                items:1,
            },
            582:{
                items:2,
            },
            768: {
                items:3,
            },
            998: {
                items:4,
            }
        }
    });
}

function setIndustryOwl(){
    var owl = $('#indus-list');
    owl.owlCarousel({
        items : 4,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsMobile : [479,1],
		loop:true,
        responsiveRefreshRate:0,
        autoplay: true,
        autoPlay:3000,
        smartSpeed: 1000,
        nav: true,
        stopOnHover:false,
        /*navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],*/
        responsive: {
            0:{
                items:1,
            },
            582:{
                items:2,
            },
            768: {
                items:3,
            },
            998: {
                items:4,
            }
        }
    });
}