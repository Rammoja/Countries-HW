const Countries = require('./models/countries.js');
const CountriesInfoView = require('./views/countries_info_view');



document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();

  const countriesContainer = document.querySelector('div#country-container');
  const countriesInfoView = new CountriesInfoView(countriesContainer);
  countriesInfoView.bindEvents();
});
