$(".alignRight").click(function(){
  $("input").slideToggle('fast');
});
$("input").focusin(function(){
  $('input').addClass("inputInFocus");
});
$("input").focusout(function(){
  $('input').removeClass("inputInFocus");
});
$('input').keypress(function (event) {
  if(event.which === 13)
    createNewDiv($('input').val());
});
function createNewDiv(text) {
  var divHtml = "<div class='oneToDo'><span class='sideBox'><i class='fa fa-trash' aria-hidden='true'></i></span><span class='task'>" + text + "</span></div>";
  var div = $(divHtml);
  $("#allToDos").append(div);
}
