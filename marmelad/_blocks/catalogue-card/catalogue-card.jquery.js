$('.b-catalogue-card__pricing-title').on('click', function(event){
    event.preventDefault();
    var indx = $(this).data('tab-index');
    $('.b-catalogue-card__pricing-title').removeClass('active');
	$(this).addClass('active');
	$('.b-catalogue-card__pricing-body').removeClass('active').hide();
	$('.b-catalogue-card__pricing-body[data-tab-index="' + indx + '"]').fadeIn();
});