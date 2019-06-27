$(document).ready(function(){
    reloadlinks();


    $('#add_button').removeAttr('disabled')
                    .click(function(){
      
       $("#menu").append('<li><a href="'+$('#add_link').val()+'"></a></li>');
       $('#add_link').val("");
       reloadlinks();
    });


   

});

function reloadlinks(){
    $('a').each(function(index){
        var thiss = $(this);
        var enlace = thiss.attr("href");
        thiss.attr('target','_blank');
        thiss.text(enlace);
    });
}

