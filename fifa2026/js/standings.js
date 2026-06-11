/* ==================================================
   FIFA WORLD CUP 2026 - STANDINGS.JS
   Tabela de Classificação (Fase de Grupos)
   ================================================== */

/* ==================================================
   ESTADO GLOBAL
   ================================================== */

let standingsData = [];

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadStandings();

});

/* ==================================================
   CARREGAR CLASSIFICAÇÃO
   ================================================== */

async function loadStandings() {

    try {

        const response = await fetch("data/classificacao.json");

        if (!response.ok) {
            throw new Error("Erro ao carregar classificacao.json");
        }

        const data = await response.json();

        standingsData = data;

        renderStandings(standingsData);

        console.log("📊 Classificação carregada:", standingsData.length);

    } catch (error) {

        console.error("❌ Erro ao carregar classificação:", error);

        const tableBody =
            document.querySelector("#standingsTable tbody");

        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="10">
                        Erro ao carregar classificação.
                    </td>
                </tr>
            `;
        }
    }
}

/* ==================================================
   RENDER DA TABELA
   ================================================== */

function renderStandings(data) {

    const tableBody =
        document.querySelector("#standingsTable tbody");

    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (!data || data.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="10">
                    Nenhum dado disponível.
                </td>
            </tr>
        `;

        return;
    }

    // ordenação por pontos e saldo de gols
    const sorted = [...data].sort((a, b) => {

        if (b.pontos !== a.pontos) {
            return b.pontos - a.pontos;
        }

        return (b.saldo || 0) - (a.saldo || 0);

    });

    sorted.forEach((team, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.selecao}</td>
            <td>${team.jogos}</td>
            <td>${team.vitorias}</td>
            <td>${team.empates}</td>
            <td>${team.derrotas}</td>
            <td>${team.golsPro}</td>
            <td>${team.golsContra}</td>
            <td>${team.saldo}</td>
            <td><strong>${team.pontos}</strong></td>
        `;

        tableBody.appendChild(row);

    });

}

/* ==================================================
   ATUALIZAR CLASSIFICAÇÃO
   ================================================== */

function updateStandings(newData) {

    standingsData = newData;

    renderStandings(standingsData);

}

/* ==================================================
   FILTRAR POR GRUPO (FUTURO)
   ================================================== */

function filterStandingsByGroup(group) {

    const filtered = standingsData.filter(
        team => team.grupo === group
    );

    renderStandings(filtered);

}

/* ==================================================
   REORDENAR DINAMICAMENTE
   ================================================== */

function sortByPoints() {

    const sorted = [...standingsData].sort((a, b) => {
        return b.pontos - a.pontos;
    });

    renderStandings(sorted);

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.Standings = {
    loadStandings,
    renderStandings,
    updateStandings,
    filterStandingsByGroup,
    sortByPoints
};

/* ==================================================
   LOG
   ================================================== */

console.log("📊 standings.js carregado com sucesso");
