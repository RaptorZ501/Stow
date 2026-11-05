import { db } from '../db/db.js';

async function chargerCartes() {
  try {

    // 2. On cible le conteneur dans le HTML
    const conteneur = document.getElementById('listeCartes');
    
    console.log("Conteneur trouvé :", conteneur); // Vérification que le conteneur est bien trouvé
    // 🔒 Sécurité : Si la div n'existe pas sur cette page, on s'arrête net sans planter
    if (!conteneur) {
      return;
    }

    // On récupère TOUS les enregistrements de la table "formulaires" sous forme de tableau JS
    const tousLesEnregistrements = await db.formulaires.toArray();

    conteneur.innerHTML = ''; // On le vide avant de le remplir pour éviter les doublons

    // 3. Si la base est vide, on affiche un petit message propre au lieu de planter
    if (tousLesEnregistrements.length === 0) {
      conteneur.innerHTML = '<p>Aucun enregistrement pour le moment.</p>';
      return;
    }

    // 3. On boucle sur chaque élément récupéré de la base
    tousLesEnregistrements.forEach((item) => {
      // item contient ton objet JSON (tes inputs + ton imageUri)
      
      // On crée un élément HTML pour la carte
      const carte = document.createElement('div');
      carte.classList.add('carte'); // Pour le style CSS si tu veux

      // On injecte le contenu (titre, textes, et l'image grâce à l'URI Capacitor)
      carte.innerHTML = `
        <img src="${item.imageUri || ''}" alt="Photo" style="width: 100px; height: 100px; object-fit: cover;" />
        <h3>${item.titre || 'Sans titre'}</h3>
        <p>ID : ${item.id}</p>
      `;

      // On ajoute la carte dans le conteneur de la page
      conteneur.appendChild(carte);
    });

  } catch (error) {
    console.error("Erreur lors du chargement des cartes :", error);
  }
}

// 4. Tu appelles cette fonction quand la page se charge (ou après un enregistrement réussi)
window.addEventListener('DOMContentLoaded', chargerCartes);