$(document).ready(function() {
		//This is to Open Search Box 
	$(".search-rool").click(function() {
		// $("body").addClass("overflow")
		$(".search .search-icon").removeClass("open-search")
		$(".search .search-icon").addClass("close-search")
		$(".search-box").addClass("search-open");
		$(".overlay-box2").fadeIn(500);
	});

	$(".overlay-box2").click(function() {
		$("body").removeClass("overflow")
		$(".search .search-icon").addClass("open-search")
		$(".search .search-icon").removeClass("close-search")
		$(".search-box").removeClass("search-open");
		$(".overlay-box2").fadeOut(500);
	});

	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeIn(300);
           $(".navgition").addClass("reset-left");
           $("body").addClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.cat-li.dropdown .cat-anchor, .lang-word').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		
		})
   	}
	
	//Main Slider Carousel
	$('.main-slider .owl-carousel').owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		autoplay: true,
		autoplayTimeout: 4000,
		rtl: true,
		margin: 20,
		navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			768: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			992: {
				items: 1,
				nav: true,
				dots: true,
				loop: true
			},
			1200: {
				items: 1,
				nav: true,
				dots: true,
				loop: true
			}
		}
	});

	//product slider Carousel
	$('.product-slider .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 15,
		rtl: true,
		navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			480: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			720: {
				items: 2,
				nav: false,
				dots: true,
				loop: true,
				margin: 15
			},
			1200: {
				items: 3,
				nav: true,
				dots: false,
				loop: true,
				margin: 30
			}
		}
	});

	

});
	// // //simple parellax on details image
		// // CommonJS
		// const simpleParallax = require('simple-parallax-js');
		var image = document.getElementsByClassName('thumbnailll');
		new simpleParallax(image, {
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
	});











	
	
		
	
		

