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
                          }
                    });