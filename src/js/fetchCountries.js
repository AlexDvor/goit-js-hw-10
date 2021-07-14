
export default { fetchCountries };
    
function fetchCountries(name) {
    const URL = 'https://restcountries.eu/rest/v2'
    
    fetch(`${URL}/name/${name}?fields=${name};name;capital;population;flag;languages`).then(r=> r.json()).then(console.log).catch(error => console.log(error))
    
}





