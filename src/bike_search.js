export default class BikeSearch {  
  static getBasicSearch() {
    return fetch(`https://bikeindex.org/api/v3/search?page=1&per_page=25&manufacturer=trek&colors=blue&location=IP&distance=10&stolenness=stolen`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      })
  }
}