document.addEventListener('DOMContentLoaded', () => {
  loadMods();
  renderAuthButton();
});

async function loadMods() {
  const mods = [
    {
      id: 1,
      name: "HD Texture Pack",
      price: 9.99,
      description: "Ulepszone tekstury dla lepszego doznań wizualnych"
    },
    {
      id: 2,
      name: "Quality of Life Mod",
      price: 4.99,
      description: "Usprawnienia interfejsu i mechanik"
    }
  ];

  const modsGrid = document.getElementById('mods-grid');
  modsGrid.innerHTML = mods.map(mod => `
    <div class="mod-card p-6 rounded-lg bg-white">
      <img src="assets/mod-placeholder.png" alt="${mod.name}" class="w-full h-48 object-cover">
      <h3 class="text-xl font-semibold mt-4">${mod.name}</h3>
      <p class="text-gray-600 mt-2">${mod.description}</p>
      <div class="mt-4 flex justify-between items-center">
        <span class="text-2xl font-bold">$${mod.price}</span>
        <button class="btn-primary" onclick="buyMod(${mod.id})">Kup teraz</button>
      </div>
    </div>
  `).join('');
}
