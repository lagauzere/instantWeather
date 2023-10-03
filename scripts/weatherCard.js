function weatherCard(data, i){
    let section = document.getElementById("weatherSection");
    let tempMax = document.createElement('div');
    let tempMin = document.createElement('div');
    let probaPluie = document.createElement('div');
    let heureSoleil = document.createElement('div');
    let space =document.createElement('br');
    let imgMeteo = document.createElement('img');
    let afficheNbJours = document.createElement('p');
    let latitude = document.getElementById('op1')
    let longitude = document.getElementById('op2')
    let cumulPluie = document.getElementById('op3')
    let ventMoyen = document.getElementById('op4')
    let directionVent = document.getElementById('op5')

    let dateJour = new Date()
    let x = data.forecast[i].weather;

    imgMeteo.style.maxHeight = '100px'
    imgMeteo.style.maxWidth = '100px'

    afficheNbJours.textContent = (dateJour.getDate())+i+"/"+(dateJour.getMonth()+1)+"/"+dateJour.getFullYear()
    
    tempMax.textContent = 'Température maximale : ' + data.forecast[i].tmax + '°C';
      tempMin.textContent = 'Température minimale : ' + data.forecast[i].tmin + '°C';
      probaPluie.textContent = 'Probabilité de pluie : ' + data.forecast[i].probarain + ' %';
      heureSoleil.textContent = 'Ensoleillement : ' + data.forecast[i].sun_hours + ' heures';
      

      if(x >= 40 && x <= 48){
        imgMeteo.src = 'images/rain.png';
        imgMeteo.alt = 'Pluie';
        
      }
      if(x == 0){
        imgMeteo.src = 'images/clear.png'
        imgMeteo.alt = 'Soleil'
      }
      if(x >= 1 && x <= 5){
        imgMeteo.src = 'images/cloud.png';
        imgMeteo.alt = 'Nuageux'
      } 
      if(x > 99 && x <= 142){
        imgMeteo.src = 'images/storm.png'
        imgMeteo.alt = 'Tempête'
      }
      if(x == 6 || x == 7){
        imgMeteo.src = 'images/mist.png'
        imgMeteo.alt = 'Brouillard'
      }
      if((x >= 20 && x <= 22) || (x>= 60 && x <=78)){
        imgMeteo.src = 'images/snow.png';
        imgMeteo.alt = 'Neige'
      }

      section.appendChild(imgMeteo)
      section.appendChild(afficheNbJours);
      section.appendChild(tempMax);
      section.appendChild(tempMin);
      section.appendChild(probaPluie);
      section.appendChild(heureSoleil);
      section.appendChild(space);
      
      
      

      if(latitude.checked){
        let latitudeAffichage = document.createElement('div');
        latitudeAffichage.textContent = 'Latitude décimale : ' + data.forecast[i].latitude
        section.appendChild(latitudeAffichage);
      }

      if(longitude.checked){
        let longitudeAffichage = document.createElement('div');
        longitudeAffichage.textContent = 'Longitude décimale : ' + data.forecast[i].longitude
        section.appendChild(longitudeAffichage);
      }

      if(cumulPluie.checked){
        let cumulPluieAffichage = document.createElement('div');
        cumulPluieAffichage.textContent = 'Cumul de pluie  : ' + data.forecast[i].rr10 + ' mm'
        section.appendChild(cumulPluieAffichage);
      }

      if(ventMoyen.checked){
        let ventMoyenAffichage = document.createElement('div');
        ventMoyenAffichage.textContent = 'Vent moyen : ' + data.forecast[i].wind10m + ' km/h'
        section.appendChild(ventMoyenAffichage);
      }

      if(directionVent.checked){
        let directionVentAffichage = document.createElement('div');
        directionVentAffichage.textContent = 'Direction du vent : ' + data.forecast[i].dirwind10m + ' °'
        section.appendChild(directionVentAffichage);
      }
}
