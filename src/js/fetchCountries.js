
export default { fetchCountries };
    

function fetchCountries(name) {
  const URL = 'https://restcountries.eu/rest/v2'

  return fetch(`${URL}/name/${name}?fields=${name};name;capital;population;flag;languages`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status)
      }
      return response.json()
    })
}

