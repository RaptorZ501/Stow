# 📦 Stow

```

Gestionnaire d'inventaire personnel 100% hors-ligne (composants électroniques, plantes, quincaillerie, récup, etc.), développé en HTML, CSS, JavaScript (Vanilla), propulsé par **Vite** et empaqué avec **Capacitor** pour mobile.

```

## 🚀 Stack Technique

- **Front-end** : HTML5, CSS3, JavaScript (Vanilla)
    
- **Bundler / Dev Server** : Vite
    
- **Mobile Engine** : Capacitor (Android / iOS)
    
- **Stockage local** : LocalStorage / IndexedDB (100% offline)
    

## 📂 Structure du Projet

```
stow/
├── index.html          # Point d'entrée de l'application
├── css/
│   └── style.css       # Styles globaux et variables de thème
├── js/
│   └── app.js          # Logique de l'application et gestion du state
└── android / ios/      # Dossiers natifs générés par Capacitor (à venir)
```

## 🛠️ Installation & Lancement (Développement Web)

1. Cloner ou ouvrir le projet dans le dossier.

2. Installer les dépendances (si utilisation de Vite) :
   
```
	npm install
```

1. Lancer le serveur de développement :

```
	npm run dev
```
## 📱 Configuration Android (Permissions)
<xml>
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/> 
</xml>

## 📱 Intégration Capacitor (Mobile)

_Notes à ne pas oublier pour le passage sur mobile :_

1. **Initialisation de Capacitor** (à faire une fois le front bien avancé) :

```
    npm install @capacitor/core @capacitor/cli
    npx cap init
```

2. **Ajout des plateformes** :

```
    npm install @capacitor/android @capacitor/ios
    npx cap add android
    npx cap add ios
```

3. **Synchronisation du code web vers natif** :

```
    npm run build
    npx cap sync
```

## ✨ Fonctionnalités Prévues

- [ ] Dashboard principal avec recherche instantanée.
    
- [ ] Système de filtres par catégories.
    
- [ ] Formulaire d'ajout/modification d'item.
    
- [ ] Gestion dynamique des stocks (option de seuil d'alerte "stock mini" pour les consommables vs objets de récup).
    
- [ ] Export / Import des données (JSON/CSV).