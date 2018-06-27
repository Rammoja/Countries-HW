const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');


const Countries = function (){
  this.text = null;
}
Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((countriesData) => {
    this.text = countriesData.countries;
    PubSub.publish('Countries:countries-loaded', this.text);
  });


module.exports = Countries;
