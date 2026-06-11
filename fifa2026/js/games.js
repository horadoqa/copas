document.addEventListener("DOMContentLoaded", () => {
    loadGames();
});

/* ==================================================
   ESTADO GLOBAL
   ================================================== */

let allGames = [];

/* ==================================================
   CARREGAR JOGOS DO JSON
   ================================================== */

async function loadGames() {

    try {

        const response = await fetch("data/jogos.json");

        if (!response.ok) {
            throw new Error("Erro ao carregar jogos.json");
        }

        const data = await response.json();

        allGames = data;

        // 🔥 GARANTE sincronização imediata global
        window.allGames = [...allGames];

        if (window.initFilters) {
            window.initFilters();
        }

        renderGames(allGames);

        console.log("📦 Jogos carregados:", allGames.length);

    } catch (error) {

        console.error("❌ Erro ao carregar jogos:", error);

        const container = document.getElementById("gamesContainer");

        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    Erro ao carregar jogos. Tente novamente mais tarde.
                </div>
            `;
        }
    }
}

/* ==================================================
   RENDER DOS JOGOS
   ================================================== */

function renderGames(games) {

    const container = document.getElementById("gamesContainer");

    if (!container) return;

    container.innerHTML = "";

    if (!games || games.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                Nenhum jogo encontrado.
            </div>
        `;

        return;
    }

    games.forEach(game => {
        container.appendChild(createGameCard(game));
    });
}

/* ==================================================
   CRIAR CARD
   ================================================== */

function createGameCard(game) {

    const card = document.createElement("div");

    card.className = "game-card reveal";

    card.dataset.date = game.data || "";
    card.dataset.phase = game.fase || "";
    card.dataset.city = game.cidade || "";

    card.innerHTML = `
        <div class="badge">${game.fase}</div>

        <div class="game-date">
            📅 ${formatDate(game.data)}
        </div>

        <div class="game-teams">

            <div class="team">
                <div class="team-name">${game.timeA}</div>
            </div>

            <div class="vs">VS</div>

            <div class="team">
                <div class="team-name">${game.timeB}</div>
            </div>

        </div>

        <div class="game-info">
            <p>🕒 ${game.hora}</p>
            <p>🏟️ ${game.estadio}</p>
            <p>📍 ${game.cidade}</p>
        </div>
    `;

    return card;
}

/* ==================================================
   BUSCAS
   ================================================== */

function getGamesByDate(date) {
    return allGames.filter(g => g.data === date);
}

function getGamesByPhase(phase) {
    return allGames.filter(g => g.fase === phase);
}

function getGamesByTeam(team) {
    return allGames.filter(
        g => g.timeA === team || g.timeB === team
    );
}

/* ==================================================
   UTILIDADE
   ================================================== */

function sortGamesByDate(games) {
    return [...games].sort((a, b) =>
        new Date(a.data) - new Date(b.data)
    );
}

function refreshGames() {
    renderGames(allGames);
}

/* ==================================================
   API GLOBAL SEGURA
   ================================================== */

window.renderGames = renderGames;
window.refreshGames = refreshGames;
window.getGamesByDate = getGamesByDate;
window.getGamesByPhase = getGamesByPhase;
window.getGamesByTeam = getGamesByTeam;

/* ==================================================
   LOG
   ================================================== */

console.log("⚽ games.js carregado com sucesso");