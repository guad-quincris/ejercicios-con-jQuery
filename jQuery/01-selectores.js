$(document).ready(function(){
    
    //selector de id
    var rojo= $("#rojo").css("background","red")
                        .css("color","white");
    console.log(rojo);

    var amarillo=$("#amarillo").css("background","yellow")
                                .css("color","green");



    var verde = $("#verde").css("background","green")
                            .css("color","white");

    //selectores de clase

   var mi_clase= $(".zebra").css("padding","5px");
   console.log(mi_clase);
   

   $(".sin_borde").click(function(){
       console.log("click");
        $(this).addClass("zebra");
   });


   //selectores de etiquetas

   var parrafos= $("p").css("cursor","pointer");

   parrafos.click(function(){
       var thiss= $(this);
       if(!thiss.hasClass("grande")){
        thiss.addClass("grande");
       }else{
           thiss.removeClass("grande");
       }       

   });

//selectores por atributo
    $('[title="Google"]').css('background','#ccc')
    .css('color','grenn');
    $('[title="Facebook"]').css('background','blue')
        .css('color','white');
//otros

  // $('p,a').addClass("margen_superior");

  var busqueda= $("#caja").find('.resaltado');
  console.log(busqueda);

});