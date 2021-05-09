$(document).ready(function(){

/* Botón para imprimir valor del range */
  $("#gasolina").change(function(){
    let valor = parseFloat($(this).val());
    switch (valor) {
      case 0:
        valor = "Tanque vacío"
        break;
      case 12.5:
        valor = "Medio cuarto"
        break;
      case 25:
        valor = "Un cuarto"
        break;
      case 37.5:
        valor = "Poco más de un cuarto"
        break;
      case 50:
        valor = "Medio tanque"
        break;
      case 62.5:
        valor = "Poco más de medio tanque"
        break;
      case 75:
        valor = "Tres cuartos de tanque"
        break;
      case 87.5:
        valor = "Poco más de tres cuartos"
        break;
      case 100:
        valor = "Tanque lleno"
        break;
      default: valor = "ERROR: ingresa de nuevo"
    }
    $("#valor-rango").text(valor);
  });
});
