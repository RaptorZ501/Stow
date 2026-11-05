// Dans ton fichier JS dédié au formulaire (chargé globalement)
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import { db } from "../db/db.js";

document.addEventListener('formulaireAffiche', () => {
    // Le signal a été reçu ! Le formulaire est forcément là.
    const check = document.getElementById("check");
    const miniInput = document.getElementById("div_mini");
    // Récupération des données du formulaire
    const formulaireElement = document.getElementById('formulaire');

    // gestion de la checkbox pour afficher ou non le champ mini
    check.addEventListener("change", () => {
        if (check.checked) {
            miniInput.style.display = "flex";
        }else {
            miniInput.style.display = "none";
        }

    });
    async function prendrePhoto() {
        try {
            const image = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.Uri, // Te renvoie l'URI de l'image locale
                source: CameraSource.Camera      // Force l'ouverture de l'appareil photo
            });

            // image.webPath contient le chemin de l'image pour l'afficher dans une balise <img>
            const imageUrl = image.webPath;
            // tu peux y afficher directement la photo !
            const imageElement = document.getElementById('preview');
            if (imageElement) {
                imageElement.style.visibility="visible";
                imageElement.src = imageUrl;
                // 2. Tu la stockes dans l'input caché du formulaire
                document.getElementById('imageUriInput').value = imageUrl;
            }
            //document.getElementById('ma-photo').src = imageUrl;

        } catch (error) {
            console.error("Erreur ou annulation de la prise de photo :", error);
        }
    }
    
    // Gestion du bouton pour prendre une photo
    document.getElementById("btn_picture").addEventListener("click", () => prendrePhoto());
    // Si tu as récupéré l'URI de ta photo un peu plus tôt, tu l'ajoutes à l'objet :
    if(typeof imageUrlDeLaCamera !== 'undefined') {
        donneesFormulaire.imageUri = imageUrlDeLaCamera;
    }

    // Soummission du formulaire
    formulaireElement.addEventListener('submit', async (e) => {
      e.preventDefault(); // Empêche la page de recharger bêtement

    

      // 1. Récupère toutes les données du formulaire d'un coup (textes, chiffres, etc.)
      const formData = new FormData(formulaireElement);
      const donneesFormulaire = Object.fromEntries(formData.entries());


      try {
        // 3. Enregistrement en NoSQL dans IndexedDB
        const id = await db.formulaires.add(donneesFormulaire);
        console.log("Enregistré avec succès ! ID généré :", id);
        // Optionnel : un petit reset du formulaire après sauvegarde
        formulaireElement.reset();
        location.reload(); // Recharge la page
      } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error);
      }
    });

});
