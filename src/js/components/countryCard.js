import { refs } from '../services/getRefs';
import { createCountryCard } from '../templates/countryMarkup';
function renderCountry(data) {
  const markup = data
    .map(({ name, capital, population, flags, languages }) => {
      const listOfLanguages = Object.values(languages).join(', ');
      return createCountryCard({ name, capital, population, flags, listOfLanguages });
    })
    .join('');
  refs.countryInfo.insertAdjacentHTML('afterbegin', markup);
}

export { renderCountry };
