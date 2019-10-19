


$(document).ready(function() {
    $('.box-text1').attr('disabled', 'true'); 
    $('.box-text2').attr('disabled', 'true'); 
    $('.box-button button.multiplication').attr('disabled', 'true'); 
    $('.box-button button.division').attr('disabled', 'true');
    $('.box-button button.equals').attr('disabled', 'true'); 

});
	$('.box-button button.number').on('click', function() {
    $char = $(this).html(); 
    $value_cal= $('.box-text1').val(); 
    $('.box-text1').val($value_cal + $char); 
    $('.box-button button.operator').removeAttr('disabled'); 
    $('.box-button button.equals').removeAttr('disabled');
});
    $('.box-button button.dots').on('click', function() {
    $char = $(this).html(); 
    $value_cal= $('.box-text1').val(); 
    $('.box-text1').val($value_cal+ $char); 
    $(this).attr('disabled', 'true'); 
});

    $('.box-button button.delall').on('click', function() {
    $('.box-text1').val(''); // Làm trống ô phép tính
    $('.box-text2').val(''); // Làm trống ô kết quả
});
   
    $('.box-button button.del').on('click', function() {
    $string = $('.box-text1').val(); 
    $('.box-text1').val($string.substring(0, $string.length - 1)); 
});
    $('.box-button button.math-operations').on('click', function() {
    $char = $(this).html(); 
    $value_cal = $('.box-text1').val();
    $('.box-text1').val($value_cal+ $char); 
    $('.box-button button.multiplication').attr('disabled', 'true'); 
    $('.box-button button.division').attr('disabled', 'true'); 
    $('.box-button button.dots').removeAttr('disabled'); 
});

    $('.box-button button.equals').on('click', function() {
    $text = $('.box-text1').val(); 
    $('.box-text2').val(eval($text));
});

  