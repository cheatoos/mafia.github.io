// Konfiguracja GitHub OAuth
const GITHUB_CLIENT_ID = 'twoj_client_id';
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`;

// Przycisk logowania
function renderAuthButton() {
  const authSection = document.getElementById('auth-section');
  
  if (localStorage.getItem('github_token')) {
    authSection.innerHTML = `
      <div class="flex items-center gap-4">
        <span>Witaj, ${localStorage.getItem('github_username')}!</span>
        <button onclick="logout()" class="btn-primary">Wyloguj</button>
      </div>
    `;
  } else {
    authSection.innerHTML = `
      <a href="${GITHUB_AUTH_URL}" class="btn-primary">
        Zaloguj przez GitHub
      </a>
    `;
  }
}

// Obsługa callbacku (trzeba dodać w ustawieniach GitHub OAuth)
if (window.location.search.includes('code=')) {
  const code = new URLSearchParams(window.location.search).get('code');
  authenticateWithGitHub(code);
}

async function authenticateWithGitHub(code) {
  // Tutaj implementacja wymiany code na token
  // Wymaga backendu (możesz użyć np. GitHub Pages + Cloudflare Workers)
}
