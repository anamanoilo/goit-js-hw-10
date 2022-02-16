import './css/styles.css';
import { refs } from './js/services/getRefs';
import { fetchCountries } from './js/services/fetchCountries';
import { clearMarkup } from './js/services/clearMarkup';
import { renderCountry } from './js/components/countryCard';
import { renderList } from './js/components/listOfCountries';
import { debounce } from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(handleCountryInput, DEBOUNCE_DELAY));

function handleCountryInput(e) {
  const country = e.target.value.trim();
  if (!country) {
    clearMarkup(refs);
    return;
  }
  fetchCountries(country)
    .then(data => {
      if (data.length > 1 && data.length <= 10) {
        clearMarkup(refs);
        renderList(data);
        return;
      }
      if (data.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        return;
      }
      clearMarkup(refs);
      renderCountry(data);
    })
    .catch(err => Notify.failure('Oops, there is no country with that name'));
}
