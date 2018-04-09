;(function(){
	var rating = $('.b-rating__fill');

	if(!$.exists(rating)) {
		return;
	}

	var fill = function () {
		var self = $(this);
		var width = $(self).data('fill-width');

		if(width) {
			self.css('width', width);
		}
	};

	$.each(rating, fill);
})();