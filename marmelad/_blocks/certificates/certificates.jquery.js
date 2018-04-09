;(function(){
	var certificates = $('.b-certificates__slider');

	if(!$.exists(certificates)) {
		return;
	}

	certificates.addClass('owl-carousel').owlCarousel({
		items : 6,
		margin : 30,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		dots: false,
		responsive: {
			0 : {
				items: 2
			},
			400: {
				items: 3
			},
			600: {
				items: 4
			},
			800: {
				items: 5
			},
			900: {
				items: 6
			}
		}
	});
})();

$('.b-certificates__slider').lightGallery({
	selector:'.b-certificates__item',
	thumbnail: true,
    autoplayControls: false,
    fullScreen: false,
    download: false,
    counter: false,
    toogleThumb: false,
    
    share: false,
    
    loop: false,
    hash: false,
    zoom: false,
    actualSize: false,
});