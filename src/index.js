import './css/styles.css';
import { fetchCountries } from './js/services/fetchCountries';
import { debounce } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('input#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(handleCountryInput, DEBOUNCE_DELAY));

function handleCountryInput(e) {
  const country = e.target.value.trim();
  if (!country) {
    clearMarkup();
    return;
  }
  fetchCountries(country)
    .then(data => {
      if (data.length > 1 && data.length <= 10) {
        clearMarkup();
        renderList(data);
        return;
      }
      if (data.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }
      clearMarkup();
      renderCountry(data);
    })
    .catch(err => Notify.failure('Oops, there is no country with that name'));
}

function renderList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return createCountryItemMarkup({ name, flags });
    })
    .join('');
  refs.countryList.insertAdjacentHTML('afterbegin', markup);
}

function renderCountry(data) {
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      const listOfLanguages = Object.values(languages).join(', ');
      return createCountryCard({ name, capital, population, flags, listOfLanguages });
    })
    .join('');
  refs.countryInfo.insertAdjacentHTML('afterbegin', markup);
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function createCountryItemMarkup({ name, flags }) {
  return `<li class="country-list__item">
                <img src="${flags.svg}" alt="${name.official}" width="40px">
                <p class="country-list__name">${name.official}</p>
              </li>`;
}

function createCountryCard({ name, capital, population, flags, listOfLanguages }) {
  return `<div class="country-name">
                <img src="${flags.svg}" alt="${name.official}" width="40px">
                <h1 class="country-list__name">${name.official}</h1>
              </div>
                <ul class="country-info__list">
                  <li class="country-info__item">
                    <span>Capital: </span>${capital}
                  </li>
                  <li class="country-info__item">
                    <span>Population: </span>${population}
                  </li>
                  <li class="country-info__item">
                    <span>Languages: </span>${listOfLanguages}
                  </li>
                </ul>
              `;
}
