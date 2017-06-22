'use strict';

module.exports = function(){
	$.gulp.task('sprite:png', function(){
		var spriteData = $.gulp.src('./source/sprite/*.+(png|PNG)')
			.pipe($.gp.spritesmith({
				//retinaSrcFilter: ['./source/sprite/*@2x.+(png|PNG)'],
				//retinaImgName: 'sprite@2x.png',
				imgName: 'sprite.png',
				cssName: 'sprite.scss',
				algorithm: 'top-down',
				imgPath: '../img/sprite.png',
				//retinaImgPath: '../img/sprite@2x.png'
			}));

		var imgStream = spriteData.img
			.pipe($.buf())
			.pipe($.gulp.dest('./source/images/'));

		var scssStream = spriteData.css
			.pipe($.gulp.dest('./source/style/common'));

		return $.merge(imgStream, scssStream);
	});
};