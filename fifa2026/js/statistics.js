/* ==================================================
   FIFA WORLD CUP 2026 - STATISTICS.JS
   Estatísticas gerais do torneio
   ================================================== */

/* ==================================================
   ESTADO GLOBAL
   ================================================== */

let stats = {
    totalGames: 0,
    totalGoals: 0,
    avgGoals: 0,
    topTeam: "-",
    topScorer: "-"
};

let gamesData = [];

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadGamesForStats();
});

/* ==================================================
   CARREGAR JOGOS
   ================================================== */

async function loadGamesForStats() {

    try {

        const response = await fetch("data/jogos.json");

        if (!response.ok) {
            throw new Error("Erro ao carregar jogos.json");
        }

        gamesData = await response.json();

        calculateStats(gamesData);

        renderStats();

        console.log("📊 Estatísticas calculadas");

    } catch (error) {

        console.error("❌ Erro ao carregar estatísticas:", error);

    }
}

/* ==================================================
   CÁLCULO DAS ESTATÍSTICAS
   ================================================== */

function calculateStats(games) {

    stats.totalGames = games.length;

    /*
        Para gols reais, seria necessário API ou JSON com placares.
        Aqui usamos dados simulados.
    */

    let simulatedGoals = 0;

    const teamGoals = {};

    games.forEach(game => {

        // simulação de gols por jogo (2 a 5 gols)
        const goals = Math.floor(Math.random() * 4) + 2;

        simulatedGoals += goals;

        // simula distribuição entre times
        const goalA = Math.floor(Math.random() * goals);
        const goalB = goals - goalA;

        teamGoals[game.timeA] = (teamGoals[game.timeA] || 0) + goalA;
        teamGoals[game.timeB] = (teamGoals[game.timeB] || 0) + goalB;

    });

    stats.totalGoals = simulatedGoals;

    stats.avgGoals =
        stats.totalGames > 0
            ? (stats.totalGoals / stats.totalGames).toFixed(2)
            : 0;

    stats.topTeam = getTopTeam(teamGoals);
    stats.topScorer = generateMockTopScorer();

}

/* ==================================================
   TIME COM MAIS GOLS
   ================================================== */

function getTopTeam(teamGoals) {

    let top = "-";
    let max = 0;

    for (const team in teamGoals) {

        if (teamGoals[team] > max) {
            max = teamGoals[team];
            top = team;
        }

    }

    return top;

}

/* ==================================================
   ARTILHEIRO SIMULADO
   ================================================== */

function generateMockTopScorer() {

    const players = [
        "Mbappé",
        "Haaland",
        "Vinícius Jr",
        "Messi",
        "Kane",
        "Neymar",
        "Bellingham",
        "Lautaro Martínez"
    ];

    const randomIndex =
        Math.floor(Math.random() * players.length);

    return players[randomIndex] + " (6 gols)";

}

/* ==================================================
   RENDERIZAÇÃO NA UI
   ================================================== */

function renderStats() {

    const totalGamesEl =
        document.getElementById("totalGames");

    const totalGoalsEl =
        document.getElementById("totalGoals");

    const avgGoalsEl =
        document.getElementById("avgGoals");

    const topTeamEl =
        document.getElementById("topTeam");

    const topScorerEl =
        document.getElementById("topScorer");

    if (totalGamesEl)
        totalGamesEl.textContent = stats.totalGames;

    if (totalGoalsEl)
        totalGoalsEl.textContent = stats.totalGoals;

    if (avgGoalsEl)
        avgGoalsEl.textContent = stats.avgGoals;

    if (topTeamEl)
        topTeamEl.textContent = stats.topTeam;

    if (topScorerEl)
        topScorerEl.textContent = stats.topScorer;

}

/* ==================================================
   ATUALIZAR ESTATÍSTICAS
   ================================================== */

function updateStats(newGames) {

    calculateStats(newGames);
    renderStats();

}

/* ==================================================
   RESETE
   ================================================== */

function resetStats() {

    stats = {
        totalGames: 0,
        totalGoals: 0,
        avgGoals: 0,
        topTeam: "-",
        topScorer: "-"
    };

    renderStats();

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.Statistics = {
    loadGamesForStats,
    calculateStats,
    renderStats,
    updateStats,
    resetStats
};

/* ==================================================
   LOG
   ================================================== */

console.log("📊 statistics.js carregado com sucesso");
