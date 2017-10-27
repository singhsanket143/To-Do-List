$(".alignRight").click(function(){
  $("input").slideToggle('fast');
});
$("input").focusin(function(){
  $('input').addClass("inputInFocus");
  console.log("Input is in focus");
});
$("input").focusout(function(){
  $('input').removeClass("inputInFocus");
});
$(".oneToDo").mouseenter(function () {
  $('.sideBox').toggle("slide");
});
$(".oneToDo").mouseleave(function () {
  $('.sideBox').toggle('slide');
});
