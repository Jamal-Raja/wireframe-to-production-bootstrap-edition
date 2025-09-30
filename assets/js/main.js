// ======== THEME TOGGLE FUNCTIONALITY ======== //  
// grab the toggle btn and icon inside it 
const btn = document.querySelector('.theme-toggle');
const icon = document.querySelector('.theme-toggle i')

// Function to update the theme of the page and store this state in the localStorage
function applyTheme(theme) {
    // 1) Update the <html data-theme="..."> attribute so CSS switches colours
    document.documentElement.setAttribute('data-theme', theme);

    // 2) Remember the choice so other pages can read it
    localStorage.setItem('theme', theme); 

    // Update the theme-toggle icon with a sun or moon
    if (!btn || !icon) return; // safety if the elements aren't on this page
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun')
        btn.setAttribute('aria-pressed', 'true');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        btn.setAttribute('aria-pressed', 'false');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // once page has loaded update the theme with the theme from the localStorage or default it to light
    const saved = localStorage.getItem('theme');
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(saved || current);
    
    if (btn) {
        btn.addEventListener('click', () => {
            const now = document.documentElement.getAttribute('data-theme') || 'light';
            const next = (now === 'light') ? 'dark' : 'light';
            applyTheme(next);
        });
    }
});

