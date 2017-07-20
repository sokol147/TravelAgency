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

	$('.services-carousel').owlCarousel({
		nav: true,
		smartSpeed: 700,
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
});