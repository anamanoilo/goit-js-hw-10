function createCountryItemMarkup({ name, flags }) {
  return `<li class="country-list__item">
                <img src="${flags.svg}" alt="${name.official}" width="40px">
                <p class="country-list__name">${name.official}</p>
              </li>`;
}
export { createCountryItemMarkup };
