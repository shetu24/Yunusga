$('.b-catalogue-reviews__more a').on('click', function(event){
    event.preventDefault();

    $(this)
        .toggleClass('active')
        .closest('.b-catalogue-reviews')
        .find('.b-catalogue-reviews__items--hidden')
        .toggleClass('active');

});
