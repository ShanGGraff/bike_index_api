export default class BikeSearch {  
  static async getBasicSearch(city, numberToReturn) {
    try {
      let response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=${numberToReturn}&location=${city}%2COR&distance=10&stolenness=proximity`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
      } catch(error) {
    return error.message;
      }
  }
}