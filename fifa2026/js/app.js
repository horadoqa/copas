/* ==================================================
   FIFA WORLD CUP 2026 - APP.JS
   Arquivo Principal da Aplicação
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("⚽ FIFA World Cup 2026 Portal iniciado");

    initializeApplication();

});

/* ==================================================
   INICIALIZAÇÃO GERAL
   ================================================== */

function initializeApplication() {

    hideLoadingScreen();

    initializeMobileMenu();

    initializeSmoothScroll();

    initializeCurrentYear();

    initializeTodayHighlight();

    initializeLazyLoading();

    initializeTooltips();

    initializeKeyboardAccessibility();

    initializeSectionAnimations();

}

/* ==================================================
   LOADING SCREEN
   ================================================== */

function hideLoadingScreen() {

    const loader =
        document.getElementById("loadingOverlay");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 1200);

}

/* ==================================================
   MENU MOBILE
   ================================================== */

function initializeMobileMenu() {

    const menuButton =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("navMenu");

    if (!menuButton || !nav) return;

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

        menuButton.innerHTML =
            nav.classList.contains("active")
                ? "✕"
                : "☰";

    });

    document.querySelectorAll(".nav a")
        .forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuButton.innerHTML = "☰";

            });

        });

}

/* ==================================================
   SCROLL SUAVE
   ================================================== */

function initializeSmoothScroll() {

    const links =
        document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ==================================================
   ANO AUTOMÁTICO NO FOOTER
   ================================================== */

function initializeCurrentYear() {

    const yearElements =
        document.querySelectorAll(".current-year");

    if (!yearElements.length) return;

    const year = new Date().getFullYear();

    yearElements.forEach(element => {

        element.textContent = year;

    });

}

/* ==================================================
   DESTACAR JOGOS DO DIA
   ================================================== */

function initializeTodayHighlight() {

    const today =
        new Date().toISOString().split("T")[0];

    const cards =
        document.querySelectorAll(".game-card");

    cards.forEach(card => {

        const date =
            card.dataset.date;

        if (date === today) {

            card.classList.add("today-match");

            const badge =
                document.createElement("span");

            badge.className = "today-badge";

            badge.textContent = "HOJE";

            card.prepend(badge);

        }

    });

}

/* ==================================================
   LAZY LOADING DE IMAGENS
   ================================================== */

function initializeLazyLoading() {

    const images =
        document.querySelectorAll("img[data-src]");

    if (!images.length) return;

    const observer =
        new IntersectionObserver((entries, obs) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img =
                    entry.target;

                img.src =
                    img.dataset.src;

                img.removeAttribute("data-src");

                obs.unobserve(img);

            });

        }, {
            threshold: 0.1
        });

    images.forEach(image => {

        observer.observe(image);

    });

}

/* ==================================================
   TOOLTIPS
   ================================================== */

function initializeTooltips() {

    const elements =
        document.querySelectorAll("[data-tooltip]");

    elements.forEach(element => {

        element.addEventListener("mouseenter", () => {

            const tooltip =
                document.createElement("div");

            tooltip.className = "tooltip";

            tooltip.innerText =
                element.dataset.tooltip;

            document.body.appendChild(tooltip);

            const rect =
                element.getBoundingClientRect();

            tooltip.style.left =
                rect.left + "px";

            tooltip.style.top =
                (rect.top - 40) + "px";

            element.tooltipElement = tooltip;

        });

        element.addEventListener("mouseleave", () => {

            if (element.tooltipElement) {

                element.tooltipElement.remove();

            }

        });

    });

}

/* ==================================================
   ACESSIBILIDADE
   ================================================== */

function initializeKeyboardAccessibility() {

    document.addEventListener("keydown", event => {

        /*
         ESC fecha menu mobile
        */

        if (event.key === "Escape") {

            const nav =
                document.getElementById("navMenu");

            const menuButton =
                document.getElementById("menuToggle");

            if (!nav) return;

            nav.classList.remove("active");

            if (menuButton) {

                menuButton.innerHTML = "☰";

            }

        }

    });

}

/* ==================================================
   ANIMAÇÕES DE ENTRADA
   ================================================== */

function initializeSectionAnimations() {

    const elements =
        document.querySelectorAll(
            ".section-title, .countdown-card, .stat-card, .host-card"
        );

    if (!elements.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                }

            });

        }, {
            threshold: 0.15
        });

    elements.forEach(element => {

        observer.observe(element);

    });

}

/* ==================================================
   UTILIDADE GLOBAL
   ================================================== */

function formatDate(dateString) {

    const date =
        new Date(dateString);

    return date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

}

/* ==================================================
   UTILIDADE GLOBAL
   ================================================== */

function formatTime(timeString) {

    if (!timeString) return "--:--";

    return timeString.slice(0, 5);

}

/* ==================================================
   UTILIDADE GLOBAL
   ================================================== */

function createElement(
    tag,
    className = "",
    content = ""
) {

    const element =
        document.createElement(tag);

    if (className) {

        element.className = className;

    }

    if (content) {

        element.innerHTML = content;

    }

    return element;

}

/* ==================================================
   UTILIDADE GLOBAL
   ================================================== */

function showMessage(
    message,
    type = "info"
) {

    const toast =
        document.createElement("div");

    toast.className =
        `toast toast-${type}`;

    toast.textContent =
        message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3000);

}

/* ==================================================
   EXPOSIÇÃO GLOBAL
   ================================================== */

window.formatDate = formatDate;
window.formatTime = formatTime;
window.createElement = createElement;
window.showMessage = showMessage;

/* ==================================================
   DEBUG
   ================================================== */

console.log(`
====================================
 FIFA WORLD CUP 2026 PORTAL
====================================
 HTML5
 CSS3
 JavaScript Vanilla
 Glassmorphism
 Dark Mode
 Responsive Design
====================================
`);