$(document).ready(function(){
    
    $("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        $("#caja").fadeIn('fast');
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        $("#caja").fadeOut('fast');

    });



});