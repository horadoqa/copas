/* ==================================================
   FIFA WORLD CUP 2026 - HOSTS.JS
   Renderização das Cidades-Sede
   ================================================== */

let hostsData = [];

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {
    loadHostCities();
});

function loadHostCities() {

    const container = document.getElementById("hostCities");

    if (!container) return;

    fetch("data/sedes.json")
        .then(res => res.json())
        .then(cidades => {

            container.innerHTML = "";

            cidades.forEach(cidade => {

                const card = document.createElement("div");
                card.className = "host-card glass";

                card.innerHTML = `
                    <div class="host-content">
                        <h3>${cidade.cidade}</h3>
                        <p><strong>País:</strong> ${cidade.pais}</p>
                        <p><strong>Estádio:</strong> ${cidade.estadio}</p>
                        <p><strong>Capacidade:</strong> ${cidade.capacidade.toLocaleString()} lugares</p>
                    </div>
                `;

                container.appendChild(card);
            });

        })
        .catch(err => {
            console.error("Erro ao carregar sedes:", err);
        });
}

/* ==================================================
   CARREGAR JSON
   ================================================== */

async function loadHosts() {

    try {

        const response = await fetch("data/sedes.json");

        if (!response.ok) {
            throw new Error("Erro ao carregar sedes.json");
        }

        hostsData = await response.json();

        renderHosts(hostsData);

        console.log("🏟️ Sedes carregadas:", hostsData.length);

    } catch (error) {

        console.error("❌ Erro ao carregar sedes:", error);

        const container = document.getElementById("hostsContainer");

        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    Erro ao carregar cidades-sede.
                </div>
            `;
        }
    }
}

/* ==================================================
   RENDER DAS SEDES
   ================================================== */

function renderHosts(hosts) {

    const container = document.getElementById("hostsContainer");

    if (!container) return;

    container.innerHTML = "";

    if (!hosts || hosts.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                Nenhuma cidade-sede encontrada.
            </div>
        `;

        return;
    }

    hosts.forEach(host => {

        const card = document.createElement("div");

        card.className = "host-card reveal-scale";

        card.innerHTML = `
            <div class="host-image">
                <img 
                    src="assets/images/${host.cidade.toLowerCase().replace(/\s/g, '-')}.jpg"
                    alt="${host.cidade}"
                    loading="lazy"
                />
            </div>

            <div class="host-info">

                <h3>${host.cidade}</h3>

                <p>🌎 ${host.pais}</p>

                <p>🏟️ ${host.estadio}</p>

                <p>👥 Capacidade: ${host.capacidade.toLocaleString()}</p>

            </div>
        `;

        container.appendChild(card);

    });

}

/* ==================================================
   FILTRO POR PAÍS (OPCIONAL FUTURO)
   ================================================== */

function filterHostsByCountry(country) {

    if (!country) {
        renderHosts(hostsData);
        return;
    }

    const filtered = hostsData.filter(
        h => h.pais === country
    );

    renderHosts(filtered);

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.Hosts = {
    loadHosts,
    renderHosts,
    filterHostsByCountry
};

/* ==================================================
   LOG
   ================================================== */

console.log("🏟️ hosts.js carregado com sucesso");
