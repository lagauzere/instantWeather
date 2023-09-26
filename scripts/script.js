let codePostal = document.getElementById('codePostal');
let boutonValidation = document.getElementById('validation');
let tempMax = document.getElementById('tempMax');
let tempMin = document.getElementById('tempMin');
let probaPluie = document.getElementById('probaPluie');
let heureSoleil = document.getElementById('heureSoleil');

let codeInsee;
let selectedCommune
const communeSelect = document.getElementById('communeSelect')

boutonValidation.style.display = 'none';
communeSelect.style.display = 'none';

codePostal.addEventListener('input', () => {
  boutonValidation.style.display = 'flex';
  communeSelect.style.display = 'none';
    let valeurCodePostal = codePostal.value
    if (/^\d{5}$/.test(valeurCodePostal)) {
      fetch(`https://geo.api.gouv.fr/communes?codePostal=${valeurCodePostal}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data && data.length === 1) {
            //console.log(data)
            //console.log(data[0].code);
            communeSelect.style.display = 'block'
            communeSelect.innerHTML = ''
            data.forEach(commune => {
            let choix = document.createElement('option')
            choix.value = commune.code
            choix.textContent = commune.nom
            communeSelect.appendChild(choix)
            communeSelect.style.display ="block"
            })
            
          } else if (data && data.length > 1) {
            for(let i = 0; i < data.length; i++){
                // console.log(data[i]);
                communeSelect.style.display = 'block'
                communeSelect.innerHTML = ''
                data.forEach(commune => {
                let choix = document.createElement('option')
                choix.value = commune.code
                choix.textContent = commune.nom
                communeSelect.appendChild(choix)
                communeSelect.style.display ="block"
                
                console.log(selectedCommune);
            })
          }
        }
        })
        
        .catch(error => {
          console.error('Erreur lors de la requête API:', error)
        })
    } 
  })

boutonValidation.addEventListener('click', ()=>{
  communeSelect.style.display = 'none'
  boutonValidation.style.display = 'none';
  selectedCommune = communeSelect.value 
  fetch(`https://api.meteo-concept.com/api/forecast/daily/0?token=4bba169b3e3365061d39563419ab23e5016c0f838ba282498439c41a00ef1091&insee=${selectedCommune}`)
  .then(response => response.json())
  .then(data => {
    console.log('Détails de la commune sélectionnée:', data)
    tempMax.textContent = data.forecast.tmax + '°C';
    tempMin.textContent = data.forecast.tmin + '°C'
    probaPluie.textContent = data.forecast.probarain + ' %'
    heureSoleil.textContent = data.forecast.sun_hours + ' heures'
  })
  .catch(error => {
    console.error('Erreur lors de la requête API:', error)
  })
});
  
