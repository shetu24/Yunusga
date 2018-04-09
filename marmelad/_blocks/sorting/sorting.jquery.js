$('.b-sorting__item').on('click', function(event){
	event.preventDefault();
	$(this).toggleClass('active');
});