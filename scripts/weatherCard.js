function weatherCard(data, i){
    let section = document.getElementById("weatherSection");
    let jours = document.createElement('div');
    let tempMax = document.createElement('div');
    let tempMin = document.createElement('div');
    let probaPluie = document.createElement('div');
    let heureSoleil = document.createElement('div');
    let space =document.createElement('br');
    let afficheNbJours = document.createElement('p');
    

    //id's creation for each variable
    tempMax.id='tempMax';
    tempMin.id='tempMin';
    probaPluie.id='probaPluie';
    heureSoleil.id='heureSoleil';
    afficheNbJours.id='afficheNbJours';
    jours.id='jours';

    i += 1;
    afficheNbJours.textContent = 'Jour ' + i;
    i -=1;
    tempMax.textContent = 'Température maximale : ' + data.forecast[i].tmax + '°C';
      tempMin.textContent = 'Température minimale : ' + data.forecast[i].tmin + '°C';
      probaPluie.textContent = 'Probabilité de pluie : ' + data.forecast[i].probarain + ' %';
      heureSoleil.textContent = 'Ensoleillement : ' + data.forecast[i].sun_hours + ' heures';

      //add of data for a simple day
      jours.appendChild(afficheNbJours);
      jours.appendChild(tempMax);
      jours.appendChild(tempMin);
      jours.appendChild(probaPluie);
      jours.appendChild(heureSoleil);
      jours.appendChild(space);
      
      //add of a day in section
      section.appendChild(jours);
}