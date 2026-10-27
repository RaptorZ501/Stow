// Dans ton fichier JS dédié au formulaire (chargé globalement)
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera';

document.addEventListener('formulaireAffiche', () => {
    // Le signal a été reçu ! Le formulaire est forcément là.
    const check = document.getElementById("check");
    const miniInput = document.getElementById("div_mini");

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

            console.log(image);

            // image.webPath contient le chemin de l'image pour l'afficher dans une balise <img>
            const imageUrl = image.webPath;
            // tu peux y afficher directement la photo !
            const imageElement = document.getElementById('preview');
            if (imageElement) {
                imageElement.style.visibility="visible";
                imageElement.src = imageUrl;
            }
            //document.getElementById('ma-photo').src = imageUrl;

        } catch (error) {
            console.error("Erreur ou annulation de la prise de photo :", error);
        }
    }

    document.getElementById("btn_picture").addEventListener("click", () => prendrePhoto());

});
