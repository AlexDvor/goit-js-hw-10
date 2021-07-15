
import './css/styles.css';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce'
import countryCardTpl from './templates/card.hbs'
import countryCardsListTpl from './templates/cards.hbs'

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')

// // ________________________________

inputValue.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));


function onSearch(e) {

  const formValue = e.target.value.trim();

  if (formValue === '') {
    clearCards()
    return
  }

  API.fetchCountries(formValue)
    .then(renderCountryCard)
    .catch(fetchError);
    

}


function renderCountryCard(data) {
  

  if (data.length === 1) {
  const card = countryCardTpl(data);
  countryList.innerHTML = card;
  }

  if (data.length >= 2 && data.length <=10 ) {
  const cards = countryCardsListTpl(data);
  countryList.innerHTML = cards;
  }
  
}


function clearCards() {
countryList.innerHTML = '';
  
}
function fetchError(error) {
  console.log(error)
}





// // __________________________________________

// const listCountry = document.querySelector('.country-list')
// console.log(listCountry)



// function checkLength (arr) {
//     if (arr.length > 10) {
//         console.log('Введи конкретно страну', arr)
//     }
// }

