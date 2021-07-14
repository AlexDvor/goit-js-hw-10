
import './css/styles.css';
import API from './js/fetchCountries';
// // import './js/fetchApi';
const DEBOUNCE_DELAY = 300;

const inputValue = document.querySelector('#search-box');



// ________________________________


inputValue.addEventListener('input', onSearch)

function onSearch(e) {
    const formValue = e.currentTarget.value;
 
    API.fetchCountries(formValue)
    

}



// API.fetchCountries('spain')



