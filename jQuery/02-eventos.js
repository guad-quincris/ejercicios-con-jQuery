$(document).ready(function(){

    //MouseOver y MouseOut
    var caja= $("#caja");
  /*  caja.mouseover(function(){
        $(this).css("background","red");
 
    });

    caja.mouseout(function(){
        $(this).css("background","green");
 
    });
*/

    // hover

    function cambiaRojo(){
        $(this).css("background","red")};

    function cambiaVerde(){
            $(this).css("background","green")};

    caja.hover(cambiaRojo, cambiaVerde);


    //click y doble click
    caja.click(function(){
        $(this).css("background","blue")
                .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background","pink")
                .css("color","yellow");
    });

   //focus y blur

   var nombre=$("#nombre");
   var datos= $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border","2px solid red")
        var text= $(this).val();
       datos.text(text).show();

    });


    //Mousedown y mouseup

    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });


    //mousemove

    $(document).mousemove(function(){
        //console.log("en x: "+event.clientX);
        //console.log("en y: "+event.clientY);

        var sigueme= $("#sigueme");

        $("body").css("cursor","none");
        sigueme.css("left",event.clientX);
        sigueme.css("top",event.clientY);
    });

});