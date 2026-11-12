import { db } from '../db/db.js';

// On exporte la fonction, mais elle ne s'exécute pas toute seule
export async function initialiserPageDetails() {
    try {
      // ICI le HTML de la page détails existe enfin !
      const template = document.getElementById('detail-template'); // ou tes IDs directs
      // 1. On cible la div conteneur dans le HTML
      const conteneur = document.getElementById('detailContainer');

      if (!template) {
        console.error("Le template détails n'est toujours pas là !");
        return;
      }

      // 2. On récupère TOUTES les données de la table "formulaires"
      const tousLesEnregistrements = await db.formulaires.toArray();

      tousLesEnregistrements.forEach((item) => {
        // 2. On clone le contenu du template (true = clone tout l'intérieur)
        const clone = template.content.cloneNode(true);
        if(!item.mini) {
          console.log("il n'y a pas de mini");
        }
        // 3. On va cibler les éléments à l'intérieur du clone pour y injecter les données
        clone.querySelector('.detail-img').src = item.imageUri || '';
        clone.querySelector('.detail-nom').textContent = item.nom || 'Sans titre';
        clone.querySelector('.detail-note').textContent = item.note || 'Sans note';
        clone.querySelector('.detail-quantity').textContent = item.quantity || '0';
        // 4. On ajoute le clone finalisé dans le conteneur de la page
        conteneur.appendChild(clone);
        });

    } catch (error) {
      console.error(error);
    }
}