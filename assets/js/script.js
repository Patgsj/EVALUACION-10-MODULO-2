$(document).ready(function() {
   

    $(".text-body-secondary-Rio").click(function() {
      var idBoton = $("#Rio").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $(".btn-close.Rio").click(function() {
      $("#detallesRio").toggle();
    });

    $(".text-body-secondary-Machu").click(function() {
      var idBoton = $("#MachuPicchu").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $(".btn-close.Machu").click(function() {
      $("#detallesMachuPicchu").toggle();
    });
  

    $(".text-body-secondary-Baires").click(function() {
      var idBoton = $("#Baires").attr("id");
      $("#detalles" + idBoton).toggle();
    });

    $(".btn-close.Baires").click(function() {
      $("#detallesBaires").toggle(); 
    });
    
});