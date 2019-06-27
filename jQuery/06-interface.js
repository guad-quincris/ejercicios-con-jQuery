$(document).ready(function(){
    console.log("hola");

    // Mover elemento por la pagina "DRAGGABLE"
    $(".elemento").draggable();

    // Redimensionar los elementos  "RESIZABLE"
    $(".elemento").resizable();

    // Seleccionar los elementos  "SELECTABLE"
     $(".lista-seleccionable").selectable();

    // Seleccionar los elementos  "SORTABLE"      
    $(".lista-seleccionable2").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    //DRop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop:function(){
            console.log("has soltado  dntro del area");
        }
    });

    //EFECTOS
    $("#mostrar").click(function(){
        //$(".caja-efectos").toggle("fade");
        //$(".caja-efectos").toggle("explode");
        //$(".caja-efectos").toggle("bind");
        //$(".caja-efectos").toggle("slide");
        //$(".caja-efectos").toggle("drop");
        //$(".caja-efectos").toggle("fold");
        //$(".caja-efectos").toggle("puff");
        //$(".caja-efectos").toggle("escale");
        $(".caja-efectos").toggle("shake",4000);
    });

    //Tooltip
   $(document).tooltip();

   //Dialog
   $("#lanzar-popup").click(function(){
        $("#popup").dialog();
   });

   //Calendario (DATEPICKER
   $("#calendario").datepicker();

   //Tabs

   $("#ventanas").tabs();


   



});