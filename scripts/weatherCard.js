function weatherCard(data, i){
    let section = document.getElementById("weatherSection");
  
    let tempMax = document.createElement('div');
    let tempMin = document.createElement('div');
    let probaPluie = document.createElement('div');
    let heureSoleil = document.createElement('div');
    let space =document.createElement('br');
    let afficheNbJours = document.createElement('p');
    

    i += 1;
    afficheNbJours.textContent = 'Jour ' + i;
    i -=1;
    tempMax.textContent = 'Température maximale : ' + data.forecast[i].tmax + '°C';
      tempMin.textContent = 'Température minimale : ' + data.forecast[i].tmin + '°C';
      probaPluie.textContent = 'Probabilité de pluie : ' + data.forecast[i].probarain + ' %';
      heureSoleil.textContent = 'Ensoleillement : ' + data.forecast[i].sun_hours + ' heures';

      section.appendChild(afficheNbJours);
      section.appendChild(tempMax);
      section.appendChild(tempMin);
      section.appendChild(probaPluie);
      section.appendChild(heureSoleil);
      section.appendChild(space);

}