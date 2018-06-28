const PubSub = require('../helpers/pub_sub.js');

const CountriesInfoView = function (container) {
  this.container = container;
}


CountriesInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (evt) => {
    this.render(evt.detail);
  });
}


CountriesInfoView.prototype.render = function (countries) {
  const p = document.createElement('p');
  p.textContent = countries;
  this.container.appendChild(p);
}

module.exports = CountriesInfoView;
