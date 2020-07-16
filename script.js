// Local Storage setItem Information

var timein =$(this).parent().attr("id")
localStorage.setItem(timein, textEntry1.value)

// Ready Function for Storage and Get/Set Item Information per Hour
$(document).ready(function(){
  
  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  
  $("#save1").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry1").attr("data-store"), textEntry1.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save2").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry2").attr("data-store"), textEntry2.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save3").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry3").attr("data-store"), textEntry3.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save4").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry4").attr("data-store"), textEntry4.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save5").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry5").attr("data-store"), textEntry5.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save6").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry6").attr("data-store"), textEntry6.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save7").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry7").attr("data-store"), textEntry7.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save8").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry8").attr("data-store"), textEntry8.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save9").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry9").attr("data-store"), textEntry9.value);
  });

  $("*[data-store]").each(function () {
    $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
  });
  $("#save10").on("click", function (itm) {
    localStorage.setItem ("item-" + $("#textEntry10").attr("data-store"), textEntry10.value);
  });

})


// Moment in Time Coding in Header
$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


// Block Coding by Time - Past, Present, Future
function currentTime () {
  let presentHour = moment().hour();
  $(".time").each(function(index,element){

  // Get the element time
  var timein = parseInt($(this).attr("id").split("-")[0]);

  // Convert to 24 hour time
  if(timein < 8){
    timein += 12;
  }

  // Conditional Statements Concerning Time
  if (timein < presentHour) {
    $(this).addClass("pastHour");
  }
  else if (timein === presentHour){
      $(this).addClass("presentHour");
  }
    else {$(this).addClass("futureHour")}
  });

}

// Reset Button Function
function myFunction() {
  console.log("Hiiii :)");

  // Set the value of each text area to empty string
  $(".forms").val("");

  // For each textarea
  for(let i = 1; i <= 10; i++){

    // Set the local storage item to empty string
    localStorage.setItem("item-" + i, "");

  }
}
