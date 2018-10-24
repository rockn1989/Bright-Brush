$(function () {

	var $currentsSlides = $('.counter__current-slide'),
		$allSlides = $('.counter__all-slides'),
		$detailSlider = $('.detail-slider .slider'),
		$progressBar = $('.progress-bar__load'),
		playSpeed = 8000;

	$detailSlider.on('init', function (event, slick) {
		$allSlides.text(slick.slideCount);
		$currentsSlides.text(1);
		$progressBar.animate({
			width: '100%'
			},
			playSpeed);
	});

	$detailSlider.slick({
		arrows: true,
		dots: false,
		infinity: true,
		cssEase: 'linear',
		autoplay: true,
		fade: false,
		autoplaySpeed: playSpeed,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}).on('afterChange', function(event, slick, currentSlide, nextSlide) {
		$currentsSlides.text(currentSlide + 1);
		$progressBar.stop(true, true);
		$progressBar.removeAttr('style');
		$progressBar.animate({
			width: '100%'
			},
			playSpeed);
	});
});
