# Task - country search
* Create a front-end part of the application to search for information about countries by their partial or full names. 

## HTTP requests
* Use the public API Rest Countries, namely resource name, which returns an array of country objects that match the search criteria. 
Write a function, fetchCountries(name), that makes an HTTP request to resource name and returns a promise with an array of countries - the result of your request. 

## Search box
* The user enters the name of the country to search for in the input#search-box text field. HTTP requests are made by typing the country name, that is, on the input event. 

* It is necessary to use the Debounce technique on the event handler and make an HTTP request 300ms after the user has stopped typing text. Use the **lodash.debounce** package.

* If the user clears the search box completely, the HTTP request is not executed, and the country list markup or country information disappears.
Sanitize the entered line using the trim() method, which will solve the problem when there are only spaces in the input field or at the beginning/end of the line.

## Interface
* If the back-end returns more than 10 countries, a notification appears in the interface saying that the name should be more specific. For notifications, use the notiflix library and display this line: "Too many matches found. Please enter a more specific name.".
* If the back-end returns from 2 to 10 countries, a list of found countries is displayed under the text field. Each list item consists of a flag and country name.
* If the request results in an array with one country, the interface displays the card markup with information about the country: flag, name, capital, population and languages.

## Error handling
* If the user enters the name of a country that does not exist, the back-end will return not an empty array, but an error with the status code 404 - not found. If you do not handle this, the user will never know that the search has not returned any results. Add a notification, "Oops, there is no country with that name", in case of an error using the notiflix library.
