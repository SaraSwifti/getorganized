//global variables
var inputHours = [];
var availableHours = {};
var m = moment();
var newDay = moment().hour(0);
var dayStart = moment().hour(9);
var presentTime = m.hour();




//creating textareas for desired inputs
for (var hour = 9; hour < 18; hour++) {
  inputHours.push(moment({hour}).format('h  a'));
  $('.container').append(`<div class='row time' data-time='${hour}'>
       <!--hour column-->
           <div class='col-sm col-md-2 hour'>
             <p>${moment({hour}).format('h  a')}</p>
           </div>
        <!--scheduling column-->
           <div class='col-sm col-md-10 d-flex description'>
              <div class='input-group'>
                <textarea class="form-control text-area"></textarea>
                <div class='input-group-append'>
                  <button class='save-btn d-flex justify-center align-center'>
                  <i class="fas fa-calendar-week"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`);
}

//Checking time to determine present, past, or future
$.each($('.time-block'), function(index, value) {
  let dateHour = $(value).attr('data-time');
   if (Number(dateHour) === m.hour()) {
      $(this).find('textarea').addClass('present');
    } else if (Number(dateHour) < m.hour()) {
      $(this).find('textarea').addClass('past').attr('disabled', 'disabled');
      $(this).find('.save-button').addClass('disabled').attr('disabled', true);
    } else {
      $(this).find('textarea').addClass('future');
    }
 });

console.log(dayStart);
console.log(presentTime);



//Check for local storage to set value to the object and clearing if presentTime is between non working hours
if (localStorage.getItem('availableHours')) {
  availableHours = JSON.parse(localStorage.getItem('availableHours'));
} else {
  availableHours = {
    '9': {
      time: '9',
      value: ''
    },
    '10': {
      time: '10',
      value: ''
    },
    '11': {
      time: '11',
      value: ''
    },
    '12': {
      time: '12',
      value: ''
    },
    '13': {
      time: '13',
      value: ''
    },
    '14': {
      time: '14',
      value: ''
    },
    '15': {
      time: '15',
      value: ''
    },
    '16': {
      time: '16',
      value: ''
    },
    '17': {
      time: '17',
      value: ''
    }
  };
}

//set value of availableHours to equal the user input for each row
$('.time-block').each(function() {
  $(this).find('.text-area').val(availableHours[$(this).attr('data-time')].value);
});

//saving value to the local storage using click
$('.save-button').on('click', function(event){
  event.preventDefault();

  //setting availableHours time attribute
  var timeValue = $(this).closest('.time-block').attr('data-time');

  //setting availableHours value attribute
    var textValue = $(this).closest('.time-block').find('.text-area').val();
    availableHours[timeValue].value = textValue;

  //saving users input into each object to local storage
    localStorage.setItem('availableHours', JSON.stringify(availableHours));
});