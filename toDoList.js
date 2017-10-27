$(".alignRight").click(function() {
  $("input").slideToggle('fast');
});
$("input").focusin(function() {
  $('input').addClass("inputInFocus");
});
$("input").focusout(function() {
  $('input').removeClass("inputInFocus");
});
$('input').keypress(function(event) {
  if (event.which === 13) {
    createNewDiv($('input').val());
    $('input').val("");
  }
});
var list = [];

function createNewDiv(text) {
  var image = $("<span class='sideBox'><i class='fa fa-trash' aria-hidden='true'></i></span>");
  var para = $("<span class='task'>" + text + "</span>");
  var divHtml = "<div class='oneToDo'></div>";
  var div = $(divHtml);
  $(div).append(image);
  $(div).append(para);
  $("#allToDos").append(div);
  var oneItem = {
    completeDiv: div,
    img: image,
    par: para
  };
  list.push(oneItem);
  if (list.length % 2 === 1)
    $(oneItem.completeDiv).addClass("whiteBackground");
  else {
    $(oneItem.completeDiv).addClass("greyBackground");
  }
  $(div).on("mouseenter", function () {
    $(image).toggle("slide");
    // $('.task').css("height","-10px");
$('.ui-effects-placeholder').css("display","none");
  });
  $(div).on("mouseleave", function () {
    $(image).toggle("slide");
    $('.ui-effects-placeholder').css("display","none");
  });
}