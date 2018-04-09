$('[type="tel"]').mask('+7 (000) 000-00-00');
$('.remodal__pre-call').on('click', function(event){
    event.preventDefault();
    $(this).removeClass('remodal__pre-call');
    $(this).closest('.remodal').find('.remodal__hidden').addClass('active');
});

$('#datetimepicker2').datetimepicker({
	format:'d.m.Y',
	timepicker:false
});

$('#datetimepicker1').datetimepicker({
	datepicker:false,
	timepicker:true
});
// $('#datetimepicker1').datetimepicker({
// 	 datepicker:false,
// 	 format:'H:i',
// });