import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeSearch from './bike_search.js';

// function clearFields() {
//   $('bikeSearch').val("");
//   $('.showErrors').text("");
//   $('.showFrame').text("");
//   $('.showManufacturer').text("");
//   $('.showTitle').text("");
//   $('.showLocation').text("");

// }

function getElements(response) {
  if (response.bikes) {
    // let  = [];
    console.log(response.bikes.length);
    for (let i = 0; i <= response.bikes.length; i++) {
      $('ul#showTitle').append(`<li>${response.bikes[i].title}</li>`);
      $('ul#showManufacturer').append(`<li>${response.bikes[i].manufacturer_name}</li>`);
      $('ul#showFrame').append(`<li>${response.bikes[i].frame_model}</li>`);
      // $('.showDate').text(`${response.bikes[0].date_stolen}`);
      $('.showLocation').append(`${response.bikes[i].stolen_location}`);
      let image = response.bikes[i].large_img;
      $('#showImg').attr("src", image);
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


async function makeApiCall(city, numberToReturn) {
  const response = await BikeSearch.getBasicSearch(city, numberToReturn);
  getElements(response);
}

$(document).ready(function () {
  $('#bikeIndex').click(function () {
    let city = $('#bikeSearch').val();
    let numberToReturn = $('#bikeSearchNumber').val();
    console.log(city, numberToReturn);
    // clearFields();
    makeApiCall(city, numberToReturn);
  });
});