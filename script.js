let workSch = {
  "8am": "",
  "9aM": "",
  "10AM": "",
  "11AM": "",
  "12PM": "",
  "1PM": "",
  "2PM": "",
  "3PM": "",
  "4PM": "",
  "5PM": "",
};






var timein =$(this).parent().attr("id")
localStorage.setItem(timein, textEntry1.value)

$(document).ready(function(){
  5


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

$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));


function currentTime () {
  let presentHour = moment().hour();
  $(".time").each(function(){
    console.log(".time")
    var timein = parseInt($(this.attr("id").split("-")[1]));
    if (timein < currentTime) {$(this).addClass("pastHour");}
    else if (timein === currentTime){
      $(this).addClass("presentHour");
    }
    else {$(this).addClass("futureHour")}
  });

}


// let counter = 1;
// for(const property in workDay) {
//   let textEntry = "#textEntry" + counter;
//   $(textEntry).text(workDay[property]);
//   let timeId = "#time" + counter;
//   let presentHour = moment().hour();
//   let timeString = $(timeId).text();
//   let timeNumber = hourNumberFromHourString(timeString);  
//   if(timeNumber < presentHour) {
//     $(textEntry).addClass("pastHour");
//   } else if (timeNumber > presentHour) {
//     $(textEntry).addClass("futureHour");
//   } else {
//     $(textEntry).addClass("presentHour");
//   }
//   counter ++;
// }

// $("button").click(function() {
//   value = $(this).siblings("text").val();
//   hourString = $(this).siblings("div").text();
  
//   saveSchedule(hourString, value);
// });

// function hourNumberFromHourString(hourString) {
//   switch(hourString) {
//     case "8am": return 8;
//     case "9AM": return 9;
//     case "10AM": return 10;
//     case "11AM": return 11;
//     case "12PM": return 12;
//     case "1PM": return 13;
//     case "2PM": return 14;
//     case "3PM": return 15;
//     case "4PM": return 16;
//     case "5PM": return 17;
//   }
// }

function loadCorrectDataset() {
  result = localStorage.getItem('workSch')
  return (result ? result : workDay);
}

function initializeLocalStorage() {
  localStorage.setItem('workSch', JSON.stringify(workDay));
};

function saveToLocalStorage(dayObj) {
  localStorage.setItem('workSch', JSON.stringify(dayObj));
}

function saveSchedule(hourString, val) {
  if(!localStorage.getItem('workSch')) {
    initializeLocalStorage();
  }

  let workHours = JSON.parse(localStorage.getItem('workSch'));
  workHours[hourString] = val

  saveToLocalStorage(workHours);
}

function updateCalendarTasks(dayObject) {
  $(".calendar-row").each(function(index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  })
}
function myFunction() {
document.getElementById("#forms").reset();}