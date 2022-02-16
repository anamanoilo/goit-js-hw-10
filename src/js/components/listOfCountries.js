import { refs } from '../services/getRefs';
import { createCountryItemMarkup } from '../templates/countryItemMarkup';

function renderList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return createCountryItemMarkup({ name, flags });
    })
    .join('');
  refs.countryList.insertAdjacentHTML('afterbegin', markup);
}

export { renderList };
