(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

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
});