let workDay = {
  "8 A.M.": "",
  "9 A.M.": "",
  "10 A.M.": "",
  "11 A.M.": "",
  "12 P.M.": "",
  "1 P.M.": "",
  "2 P.M.": "",
  "3 P.M.": "",
  "4 P.M.": "",
  "5 P.M.": "",
};

$(document).ready(function(){
  if(!localStorage.getItem('workDay')) {
    updateCalendarTasks(workDay);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
  }
})
