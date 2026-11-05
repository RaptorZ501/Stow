import Dexie from 'dexie';

// 1. On crée l'instance de la base de données
export const db = new Dexie('MonApplicationDB');

// 2. On définit la version et la table
db.version(1).stores({
  formulaires: '++id' 
});