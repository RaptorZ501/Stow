import './gestion_btn.js';
import './formulaire.js';
import './details.js';
import { chargerCartes } from './recupereDB.js';
import { db } from '../db/db.js';

document.addEventListener("DOMContentLoaded", async () => {

    const tousLesEnregistrements = await db.formulaires.toArray();

    if(tousLesEnregistrements.length === 0) {
      /* logique pour integrer un HTML dans un autre */
      /* Page a vide */
      fetch('./src/composants/main_vide.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main_container').innerHTML = data;
      })

    }else {
      /* Page Main */
      fetch('./src/composants/main.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('main_container').innerHTML = data;
          chargerCartes(); // Appel de la fonction pour charger les cartes après l'insertion du HTML
          
      })
    }
});

