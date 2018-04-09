var sortAsc = 'b-lk-table__sort-param--asc';
var sortDesc = 'b-lk-table__sort-param--desc';

$('.b-lk-table__sort-param').on('click', function(event){
    event.preventDefault();
    if ($(this).is('.' + sortAsc)) {
        $(this)
            .removeClass(sortAsc)
            .addClass(sortDesc);
    } else {
        $(this)
            .removeClass(sortDesc)
            .addClass(sortAsc);
    }
});