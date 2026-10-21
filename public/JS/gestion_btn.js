    /* Centralisation de mes Btn */
    document.addEventListener("click", (event) => {
      if(event.target && event.target.id === "btn_form") {
        fetch('./composants/formulaire.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('main_container').innerHTML = data;
          });
      }
    })