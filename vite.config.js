import { defineConfig } from 'vite';

                    export default defineConfig({
                          server: {
                            port: 5173,
                            strictPort: true,
                            watch: {
                              usePolling: true,
                              interval: 100
                            }
                          },
                          build: {
                            outDir: 'www', // Dit à Vite d'écraser le dossier www proprement lors du build
                            emptyOutDir: true
                          },
                          // 👇 Ajoute ceci pour forcer le rechargement de la page sur n'importe quel fichier modifié
                          plugins: [{
                            name: 'force-reload-on-change',
                            handleHotUpdate({ server }) {
                              server.ws.send({ type: 'full-reload' });
                              return [];
                            }
                          }]
                          
                    });