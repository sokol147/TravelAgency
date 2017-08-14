/*(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();*/

$(document).ready(function(){

	$('.menu-link').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu-link-active');
		$('.menu').toggleClass('menu-active');
	});
	$('.menu-list-item--link').on('click', function(e){
		e.preventDefault();
		$('.menu').removeClass('menu-active');
		$('.menu-link').removeClass('menu-link-active');
	});

	$('.services-carousel').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			serviceCarousel()
		}, 100);
	});

/*	$('.js-compare-products').owlCarousel({
		items: 2
	});*/

	$('.services-carousel').owlCarousel({
		nav: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function serviceCarousel(){
		$('.services-carousel-item').each(function(){
			var $serviceItem = $(this),
					$serviceItemHeight = $serviceItem.find('.services-carousel-content').outerHeight();
					$serviceItem.find('.services-carousel-image').css('min-height', $serviceItemHeight);
		});
	};
	serviceCarousel();

	$('.services-carousel-content .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('.gallery .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('.review .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('.btn-call-back').on('click', function(e){
		e.preventDefault();
		$('.call-back-success').addClass('active');
		setTimeout(function(){
			$('.call-back-success').removeClass('active');
		},5000);
		setTimeout(function(){
			$('.call-back--form input[type="text"]').val('');
		},4000);
	});

	$('.call-back-select').selectize({
	});

	$('.carousel-reviews').owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 700,
		dots: true
	});

	$('.carousel-partners').owlCarousel({
		items: 4,
		smartSpeed: 700,
		loop: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			768:{
				items: 2
			},
			992:{
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(window).on('scroll', function(){
		if($(this).scrollTop() > $(this).height()){
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
	});

	$('.scroll-top').on('click',function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});