let filteredGames = [];
let allGamesData = [];

/* ==================================================
   INIT
================================================== */

function initFilters() {
    initializeFilters();
    bindFilterEvents();
}

window.initFilters = initFilters;

/* ==================================================
   SETUP
================================================== */

function initializeFilters() {

    const phaseFilter = document.getElementById("phaseFilter");
    const teamFilterEl = document.getElementById("teamFilter");
    const cityFilterEl = document.getElementById("cityFilter");
    const searchInput = document.getElementById("searchInput");

    if (!phaseFilter || !teamFilterEl || !cityFilterEl || !searchInput) {
        console.warn("⚠️ Filtros não encontrados no DOM");
        return;
    }

    allGamesData = window.allGames || [];

    populateTeamFilter(allGamesData);
    populateCityFilter(allGamesData);

    filteredGames = [...allGamesData];
}

/* ==================================================
   EVENTOS
================================================== */

function bindFilterEvents() {

    const phaseFilter = document.getElementById("phaseFilter");
    const teamFilter = document.getElementById("teamFilter");
    const cityFilter = document.getElementById("cityFilter");
    const searchInput = document.getElementById("searchInput");

    if (!phaseFilter || !teamFilter || !cityFilter || !searchInput) return;

    phaseFilter.addEventListener("change", applyFilters);
    teamFilter.addEventListener("change", applyFilters);
    cityFilter.addEventListener("change", applyFilters);
    searchInput.addEventListener("input", debounce(applyFilters, 300));
}

/* ==================================================
   APPLY FILTERS
================================================== */

function applyFilters() {

    const phase = document.getElementById("phaseFilter").value;
    const team = document.getElementById("teamFilter").value;
    const city = document.getElementById("cityFilter").value;
    const search = document.getElementById("searchInput").value.toLowerCase();

    filteredGames = allGamesData.filter(game => {

        const timeA = (game.timeA || "").toLowerCase();
        const timeB = (game.timeB || "").toLowerCase();
        const cidade = (game.cidade || "").toLowerCase();
        const estadio = (game.estadio || "").toLowerCase();

        const matchPhase = !phase || game.fase === phase;

        const matchTeam =
            !team ||
            game.timeA === team ||
            game.timeB === team;

        const matchCity = !city || game.cidade === city;

        const matchSearch =
            !search ||
            timeA.includes(search) ||
            timeB.includes(search) ||
            cidade.includes(search) ||
            estadio.includes(search);

        return matchPhase && matchTeam && matchCity && matchSearch;
    });

    renderFilteredGames(filteredGames);
}

/* ==================================================
   RENDER
================================================== */

// function renderFilteredGames(games) {
//     if (!window.renderGames) return;
//     window.renderGames(games);
// }

function renderFilteredGames(games) {
    console.log("FILTRADOS:", games);

    if (!window.renderGames) {
        console.warn("renderGames não existe");
        return;
    }

    window.renderGames(games);
}

/* ==================================================
   POPULAR TIMES
================================================== */

function populateTeamFilter(games) {

    const teamFilter = document.getElementById("teamFilter");
    if (!teamFilter) return;

    teamFilter.innerHTML = `<option value="">Todas as Seleções</option>`;

    const teams = new Set();

    games.forEach(g => {
        if (g.timeA) teams.add(g.timeA);
        if (g.timeB) teams.add(g.timeB);
    });

    [...teams].sort().forEach(team => {
        const option = document.createElement("option");
        option.value = team;
        option.textContent = team;
        teamFilter.appendChild(option);
    });
}

/* ==================================================
   POPULAR CIDADES
================================================== */

function populateCityFilter(games) {

    const cityFilter = document.getElementById("cityFilter");
    if (!cityFilter) return;

    cityFilter.innerHTML = `<option value="">Todas as Cidades</option>`;

    const cities = new Set();

    games.forEach(g => {
        if (g.cidade) cities.add(g.cidade);
    });

    [...cities].sort().forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

/* ==================================================
   DEBOUNCE
================================================== */

function debounce(func, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

/* ==================================================
   CLEAR
================================================== */

function clearFilters() {
    document.getElementById("phaseFilter").value = "";
    document.getElementById("teamFilter").value = "";
    document.getElementById("cityFilter").value = "";
    document.getElementById("searchInput").value = "";
    applyFilters();
}

/* ==================================================
   GLOBAL
================================================== */

window.Filters = {
    applyFilters,
    clearFilters
};

console.log("🎯 filters.js OK");