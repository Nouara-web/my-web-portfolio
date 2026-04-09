// Sélection du bouton
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Fonction pour appliquer le mode
function applyTheme(theme) {
    if(theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙 Dark Mode';
    }
}

// Vérifier le mode enregistré dans localStorage
const savedTheme = localStorage.getItem('theme');
if(savedTheme) {
    applyTheme(savedTheme);
}

// Écoute du clic pour basculer le mode
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    if(isDark) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});