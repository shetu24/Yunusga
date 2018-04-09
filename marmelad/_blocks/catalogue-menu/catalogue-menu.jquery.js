$('.b-catalogue-menu__show-more').on('click', function(event){
    event.preventDefault();
    $(this).closest('.b-catalogue-menu__item').toggleClass('active');
    $(this).trigger('blur');
});

$('.b-catalogue-menu__more-link a').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.b-catalogue-menu__items--hidden', $(this).closest('.b-catalogue-menu')).toggleClass('active');
});