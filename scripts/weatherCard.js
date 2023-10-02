function weatherCard(data, i){
  let section = document.getElementById("weatherSection");
  let jours = document.createElement('div');
  let tempMax = document.createElement('div');
  let tempMin = document.createElement('div');
  let probaPluie = document.createElement('div');
  let heureSoleil = document.createElement('div');
  let space =document.createElement('br');
  let afficheNbJours = document.createElement('p');
  let latitude = document.getElementById('op1')
  let longitude = document.getElementById('op2')
  let cumulPluie = document.getElementById('op3')
  let ventMoyen = document.getElementById('op4')
  let directionVent = document.getElementById('op5')

  let dateJour =new Date()

  //id's creation for each variable
  tempMax.id='tempMax';
  tempMin.id='tempMin';
  probaPluie.id='probaPluie';
  heureSoleil.id='heureSoleil';
  afficheNbJours.id='afficheNbJours';
  jours.id='jours';


  afficheNbJours.textContent = (dateJour.getDate())+i+"/"+(dateJour.getMonth()+1)+"/"+dateJour.getFullYear()



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
    
    if(latitude.checked){
      let latitudeAffichage = document.createElement('div');
      latitudeAffichage.textContent = 'Latitude décimale : ' + data.forecast[i].latitude
      jours.appendChild(latitudeAffichage);
    }

    if(longitude.checked){
      let longitudeAffichage = document.createElement('div');
      longitudeAffichage.textContent = 'Longitude décimale : ' + data.forecast[i].longitude
      jours.appendChild(longitudeAffichage);
    }

    if(cumulPluie.checked){
      let cumulPluieAffichage = document.createElement('div');
      cumulPluieAffichage.textContent = 'Cumul de pluie  : ' + data.forecast[i].rr10 + ' mm'
      jours.appendChild(cumulPluieAffichage);
    }

    if(ventMoyen.checked){
      let ventMoyenAffichage = document.createElement('div');
      ventMoyenAffichage.textContent = 'Vent moyen : ' + data.forecast[i].wind10m + ' km/h'
      jours.appendChild(ventMoyenAffichage);
    }

    if(directionVent.checked){
      let directionVentAffichage = document.createElement('div');
      directionVentAffichage.textContent = 'Direction du vent : ' + data.forecast[i].dirwind10m + ' °'
      jours.appendChild(directionVentAffichage);
    }
}