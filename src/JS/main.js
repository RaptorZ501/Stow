import './gestion_btn.js';
import './formulaire.js';


document.addEventListener("DOMContentLoaded", () => {

    /* logique pour integrer un HTML dans un autre */
    /* Page a vide */
    fetch('./src/composants/main_vide.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('main_container').innerHTML = data;
    })
});

