$('.b-catalogue-list__more a').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $(this).closest('.b-catalogue-list').find('.b-catalogue-list__items--hidden').toggleClass('active');
});