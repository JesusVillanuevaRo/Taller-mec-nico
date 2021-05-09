$(document).ready(function(){

/*  */
  $("#nombre").change(function () {
    let id = $("#localstorage-id").val()
    localStorage.setItem('id', id);
  });

});
