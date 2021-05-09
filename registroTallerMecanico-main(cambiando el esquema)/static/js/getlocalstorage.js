$(document).ready(function(){

/*  */
  let primeraVez = true;

  $("body").click(function () {
    let id = localStorage.getItem('id');
    if (primeraVez) $("#localstorage-id").val(id);
    //console.log("Se intentó poner ", id, " en input");
    primeraVez = false;
  });

});
