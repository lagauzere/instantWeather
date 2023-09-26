let codePostal=14480;

fetch(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
        });
        let selectedCommune="14118";

        
fetch(`https://api.meteo-concept.com/api/forecast/daily/0?token=4bba169b3e3365061d39563419ab23e5016c0f838ba282498439c41a00ef1091&insee=${selectedCommune}`)
            .then(response => response.json())
            .then(data => {
              console.log('Détails de la commune sélectionnée:', data)
            })
            .catch(error => {
              console.error('Erreur lors de la requête API:', error)
            })