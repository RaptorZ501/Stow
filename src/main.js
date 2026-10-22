
document.addEventListener("DOMContentLoaded", () => {
    /* logique pour integrer un HTML dans un autre */
    /* Page a vide */
    fetch('./composants/main_vide.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('main_container').innerHTML = data;
    })
});

