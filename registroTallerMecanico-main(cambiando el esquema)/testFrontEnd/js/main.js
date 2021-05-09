$(document).ready(function(){

/* Botón para seleccionar todos los checkboxes */
  let allSelected = false;
  $("#select-all-btn").click(function(){
    if (!allSelected) {
      $(".form-check-input").prop("checked", true);
      $(this).text("Desmarcar todo");
      allSelected = true;
    } else {
      $(".form-check-input").prop("checked", false);
      $(this).text("Marcar todo");
      allSelected = false;
    }});

});
