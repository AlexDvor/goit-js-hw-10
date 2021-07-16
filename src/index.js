
import './css/styles.css';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';
import countryCardTpl from './templates/card.hbs';
import countryCardsListTpl from './templates/cards.hbs';
import { Notify } from "notiflix";

const DEBOUNCE_DELAY = 300;
const inputValue = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')


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
    parsPage(countryCardTpl, data)
  }

  if (data.length >= 2 && data.length <= 10) {
    parsPage(countryCardsListTpl, data);
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
  
}


function clearCards() {
  countryList.innerHTML = '';
  
}


function fetchError() {
Notify.failure('Oops, there is no country with that name',{width: '360px'});
}


function parsPage(templates, array) {
  const card = templates(array);
  countryList.innerHTML = card;
 
}