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
export { createCountryCard };
