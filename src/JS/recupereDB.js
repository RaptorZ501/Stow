import { db } from '../db/db.js'; // Ajuste le chemin selon où est ton db.js

export async function chargerCartes() {
  try {
    // 1. On cible la div conteneur dans le HTML
    const conteneur = document.getElementById('listeCartes');

    // 2. On récupère TOUTES les données de la table "formulaires"
    const tousLesEnregistrements = await db.formulaires.toArray();
    console.log("Enregistrements récupérés :", tousLesEnregistrements);


    // 🔒 Sécurité : Si la div n'existe pas sur cette page, on s'arrête net sans planter
    if (!conteneur) {
      console.error("Conteneur non trouvé");
      return;
    }

    // On vide le conteneur pour éviter les doublons si on recharge
    conteneur.innerHTML = '';

    // 3. Si la base est vide, on affiche un petit message propre au lieu de planter
    if (tousLesEnregistrements.length === 0) {
      conteneur.innerHTML = '<p>Aucun enregistrement pour le moment.</p>';
      return;
    }

    // 1. On va chercher le template dans le DOM
    const template = document.getElementById('carte-template');

    // 4. Sinon, on boucle sur chaque objet pour fabriquer les cartes
    tousLesEnregistrements.forEach((item) => {
      // 2. On clone le contenu du template (true = clone tout l'intérieur)
      const clone = template.content.cloneNode(true);
      if(!item.mini) {
        console.log("il n'y a pas de mini");
      }
      // 3. On va cibler les éléments à l'intérieur du clone pour y injecter les données
      clone.querySelector('.carte-img').src = item.imageUri || '';
      clone.querySelector('.carte-nom').textContent = item.nom || 'Sans titre';
      clone.querySelector('.carte-quantity').textContent = `Quantité : ${item.quantity || 0}`;
      // clone.querySelector('.carte-category').textContent = `Catégorie : ${item.category || 'Sans catégorie'}`;
      clone.querySelector('.carte-note').textContent = `Note : ${item.note || 'Sans note'}`;
      // 4. On ajoute le clone finalisé dans le conteneur de la page
      conteneur.appendChild(clone);
    });

  } catch (error) {
    console.error("Erreur lors du chargement des cartes :", error);
  }
}