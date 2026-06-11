/* ==================================================
   FIFA WORLD CUP 2026 - SCROLL.JS
   Animações de Scroll + Botão Voltar ao Topo
   ================================================== */

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeScrollEffects();
    initializeBackToTop();
    initializeNavbarScroll();
    initializeRevealOnScroll();

});

/* ==================================================
   BOTÃO VOLTAR AO TOPO
   ================================================== */

function initializeBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==================================================
   NAVBAR DINÂMICA NO SCROLL
   ================================================== */

function initializeNavbarScroll() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}

/* ==================================================
   REVEAL ON SCROLL (INTERSECTION OBSERVER)
   ================================================== */

function initializeRevealOnScroll() {

    const elements = document.querySelectorAll(
        ".section-title, .game-card, .stat-card, .host-card, .countdown-card"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    entry.target.classList.add("reveal");

                    obs.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach(el => {
        el.classList.add("reveal-init");
        observer.observe(el);
    });

}

/* ==================================================
   EFEITOS DE SCROLL GERAIS
   ================================================== */

function initializeScrollEffects() {

    let lastScroll = 0;

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        const currentScroll = window.scrollY;

        /* esconder/mostrar header no scroll */
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;

    });

}

/* ==================================================
   SCROLL SUAVE PARA ÂNCORAS INTERNAS
   ================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

/* ==================================================
   DETECTAR SE ELEMENTO ESTÁ VISÍVEL
   ================================================== */

function isInViewport(element) {

    const rect = element.getBoundingClientRect();

    return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0
    );

}

/* ==================================================
   PARALLAX SIMPLES (HERO)
   ================================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const offset = window.scrollY * 0.4;

    hero.style.backgroundPositionY = `${offset}px`;

});

/* ==================================================
   UTILIDADE: DEBOUNCE
   ================================================== */

function debounce(func, delay = 100) {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);

    };

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.ScrollUtils = {
    isInViewport,
    debounce
};

/* ==================================================
   LOG
   ================================================== */

console.log("📜 scroll.js carregado com sucesso");
