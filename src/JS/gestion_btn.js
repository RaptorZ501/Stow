    /* Centralisation de mes Btn */
    document.addEventListener("click", (event) => {
      // Btn du formulaire
      if(event.target && event.target.id === "btn_form") {
        fetch('./src/composants/formulaire.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('main_container').innerHTML = data;
            // LE SIGNAL : On prévient l'application que le formulaire est prêt
            const evenementFormulairePret = new CustomEvent('formulaireAffiche');
            document.dispatchEvent(evenementFormulairePret);
          });
      }
    })