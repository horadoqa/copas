/* ==================================================
   FIFA WORLD CUP 2026 - THEME.JS
   Sistema de Tema (Claro / Escuro)
   ================================================== */

/* ==================================================
   CONFIGURAÇÃO
   ================================================== */

const THEME_KEY = "fifa2026_theme";

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();
    bindThemeToggle();

});

/* ==================================================
   INICIAR TEMA SALVO
   ================================================== */

function initializeTheme() {

    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        updateThemeButton(true);
    } else {
        document.body.classList.remove("light-mode");
        updateThemeButton(false);
    }

}

/* ==================================================
   TOGGLE DO TEMA
   ================================================== */

function bindThemeToggle() {

    const button = document.getElementById("themeToggle");

    if (!button) {
        console.warn("⚠️ Botão de tema não encontrado");
        return;
    }

    button.addEventListener("click", () => {

        const isLight = document.body.classList.toggle("light-mode");

        localStorage.setItem(
            THEME_KEY,
            isLight ? "light" : "dark"
        );

        updateThemeButton(isLight);

        showThemeToast(isLight);

    });

}

/* ==================================================
   ATUALIZAR ÍCONE DO BOTÃO
   ================================================== */

function updateThemeButton(isLight) {

    const button = document.getElementById("themeToggle");

    if (!button) return;

    button.textContent = isLight ? "☀️" : "🌙";

}

/* ==================================================
   FEEDBACK VISUAL
   ================================================== */

function showThemeToast(isLight) {

    const toast = document.createElement("div");

    toast.className = "theme-toast";

    toast.textContent =
        isLight ? "Modo Claro ativado" : "Modo Escuro ativado";

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 50);

    setTimeout(() => {
        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 400);

    }, 2000);

}

/* ==================================================
   DETECTAR PREFERÊNCIA DO SISTEMA
   ================================================== */

function detectSystemTheme() {

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";

}

/* ==================================================
   RESET TEMA
   ================================================== */

function resetTheme() {

    localStorage.removeItem(THEME_KEY);

    const systemTheme = detectSystemTheme();

    if (systemTheme === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }

    updateThemeButton(systemTheme === "light");

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.Theme = {
    initializeTheme,
    resetTheme,
    detectSystemTheme
};

/* ==================================================
   LOG
   ================================================== */

console.log("🎨 theme.js carregado com sucesso");
