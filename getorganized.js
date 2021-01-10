//global variables
var inputHours = ["9am","10am","11fam","12pm","1pm","2pm","3pm"];


//this code will create the time slots and save key variables for each key/attriburte
for (var i = 0; i < inputHours.length; i++) {
  var timeSlot = $("<div>");
  timeSlot.addClass("hour col-xs-2 col-sm-2 col-md-2 col-lg-2");
  timeSlot.text(inputHours[i]);
  var inputSched = $("<div>");
  inputSched.addClass("future col-xs-9 col-sm-9 col-md-9 col-lg-9 description");
  var saveButton = ("<button>");
  saveButton.addClass("col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn");
  var tRow = $("<div>");
  tRow.addClass("row time-block");
  tRow.append(timeSlot, inputSched, saveButton);

}



  //inputHours[i].append(moment({hour}).format ("h a"));
 
  

