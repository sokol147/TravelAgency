(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();

$(document).ready(function(){
	$('.menu-link').on('click', function(){
		$(this).toggleClass('menu-link-active');
	});
});