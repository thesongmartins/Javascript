'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// https://countries-api-836d.onrender.com/countries/
///////////////////////////////////////

// First AJAX call: XMLHttpRequest
const renderCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = ` <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
renderCountry('usa');
renderCountry('portugal');
renderCountry('japan');

// How the web works
// 1. Browser sends a request to the server
// 2. Server processes the request
// 3. Server sends a response to the browser
// 4. Browser renders the response
// 5. Browser sends a request to the server
// 6. Server processes the request
// 7. Server sends a response to the browser

// How AJAX works
// 1. Browser sends a request to the server
// 2. Server processes the request
// 3. Server sends a response to the browser
// 4. Browser renders the response
