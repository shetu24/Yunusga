$('.b-registration__tabs-title').on('mouseenter click', function(event){
    event.preventDefault();

    if($(this).hasClass('active')) {
        return;
    }

    var indx = $(this).data('tab-index');

    // titles
    $('.b-registration__tabs-title').removeClass('active');
    $(this).addClass('active');

    // bodys
    $('.b-registration__tab-body').removeClass('active').hide();
    $('.b-registration__tab-body[data-tab-index="' + indx + '"]').fadeIn();

    // pointer
    var tabsPointer = $('.b-registration__tabs-pointer');
    tabsPointer.removeAttr('class');
    tabsPointer.addClass('b-registration__tabs-pointer b-registration__tabs-pointer--pos' + indx);

});