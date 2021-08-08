import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeSearch from './bike_search.js';

// /*function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}


// $('#gifSearch').click(function() {
//   let search = $('#search').val();
//   clearFields();
//   let promise = GiphyService.getSearch(search);
//   promise.then(function(response){
//     const body = JSON.parse(response);
//     let downSizedGif1 = body.data[0].images.downsized.url;
//     $('#imageToShow').attr("src", downSizedGif1);
//   });
// });