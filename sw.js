self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Este evento vacío es obligatorio para que Android habilite el botón "Instalar"
});
