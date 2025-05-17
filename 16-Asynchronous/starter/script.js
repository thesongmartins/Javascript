'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// https://countries-api-836d.onrender.com/countries/
///////////////////////////////////////

// First AJAX call: XMLHttpRequest
// const renderCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = ` <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// renderCountry('usa');
// renderCountry('portugal');
// renderCountry('japan');

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

// Callbacks Hell
// 1. Browser sends a request to the server
// 2. Server processes the request
// 3. Server sends a response to the browser
// 4. Browser renders the response
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //   countriesContainer.style.opacity = 1;
};

const country1 = function (data, className = ' ') {
  const html = ` <article class="country ${className}">
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
  //   countriesContainer.style.opacity = 1;
};

// const renderCountryNeighbors = function (country) {
//   // 1. Get country Ajax call
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     country1(data);

//     // 2. Get neighbors country
//     const [neighbor] = data.borders;
//     console.log(neighbor);

//     if (!neighbor) return;

//     // 3. Get neighbors country Ajax call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       country1(data2, 'neighbour');
//     });
//   });
// };
// renderCountryNeighbors('portugal');

// Promise And the fetch API
// 1. Browser sends a request to the server
// 2. Server processes the request
// 3. Server sends a response to the browser
// 4. Browser renders the response

const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);

request.then(response => {
  console.log(response);
});

// Consuming Promises
// 1. Browser sends a request to the server
// 2. Server processes the request
// 3. Server sends a response to the browser
// 4. Browser renders the response
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       country1(data[0]);

//       const neighbor = data[0].borders[0];

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => country1(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
