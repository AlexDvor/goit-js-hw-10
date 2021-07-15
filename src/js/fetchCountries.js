
export default { fetchCountries };
    

function fetchCountries(name) {
  const URL = 'https://restcountries.eu/rest/v2'

  return fetch(`${URL}/name/${name}?fields=${name};name;capital;population;flag;languages`)
    .then(response => { return response.json() });

}

