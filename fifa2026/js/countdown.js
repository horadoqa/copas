/* ==================================================
   FIFA WORLD CUP 2026 - COUNTDOWN.JS
   Contadores Regressivos da Copa do Mundo 2026
   ================================================== */

/*
    Datas utilizadas:

    Abertura:
    11/06/2026

    Final:
    19/07/2026

    Caso a FIFA altere as datas futuramente,
    basta modificar as constantes abaixo.
*/

/* ==================================================
   CONFIGURAÇÃO DAS DATAS
   ================================================== */

const WORLD_CUP_OPENING_DATE =
    new Date("2026-06-11T20:00:00");

const WORLD_CUP_FINAL_DATE =
    new Date("2026-07-19T20:00:00");

/* ==================================================
   INICIALIZAÇÃO
   ================================================== */

document.addEventListener("DOMContentLoaded", () => {

    startCountdown(
        "openingCountdown",
        WORLD_CUP_OPENING_DATE,
        "Abertura"
    );

    startCountdown(
        "finalCountdown",
        WORLD_CUP_FINAL_DATE,
        "Final"
    );

});

/* ==================================================
   CONTADOR PRINCIPAL
   ================================================== */

function startCountdown(
    elementId,
    targetDate,
    eventName = ""
) {

    const element =
        document.getElementById(elementId);

    if (!element) {
        console.warn(
            `Elemento #${elementId} não encontrado`
        );
        return;
    }

    updateCountdown(
        element,
        targetDate,
        eventName
    );

    setInterval(() => {

        updateCountdown(
            element,
            targetDate,
            eventName
        );

    }, 1000);

}

/* ==================================================
   ATUALIZA CONTADOR
   ================================================== */

function updateCountdown(
    element,
    targetDate,
    eventName
) {

    const now = new Date();

    const difference =
        targetDate.getTime() - now.getTime();

    /*
        Evento já ocorreu
    */

    if (difference <= 0) {

        renderFinishedEvent(
            element,
            eventName
        );

        return;
    }

    const countdown =
        calculateTimeRemaining(difference);

    renderCountdown(
        element,
        countdown
    );

}

/* ==================================================
   CÁLCULO DO TEMPO
   ================================================== */

function calculateTimeRemaining(milliseconds) {

    const days =
        Math.floor(
            milliseconds /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (milliseconds %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (milliseconds %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (milliseconds %
                (1000 * 60)) /
            1000
        );

    return {
        days,
        hours,
        minutes,
        seconds
    };

}

/* ==================================================
   RENDERIZAÇÃO
   ================================================== */

function renderCountdown(
    element,
    time
) {

    element.innerHTML = `
        <div class="countdown-grid-inner">

            <div class="countdown-item">
                <span class="count-value">
                    ${pad(time.days)}
                </span>
                <span class="count-label">
                    Dias
                </span>
            </div>

            <div class="countdown-item">
                <span class="count-value">
                    ${pad(time.hours)}
                </span>
                <span class="count-label">
                    Horas
                </span>
            </div>

            <div class="countdown-item">
                <span class="count-value">
                    ${pad(time.minutes)}
                </span>
                <span class="count-label">
                    Min
                </span>
            </div>

            <div class="countdown-item">
                <span class="count-value">
                    ${pad(time.seconds)}
                </span>
                <span class="count-label">
                    Seg
                </span>
            </div>

        </div>
    `;

}

/* ==================================================
   EVENTO ENCERRADO
   ================================================== */

function renderFinishedEvent(
    element,
    eventName
) {

    element.innerHTML = `
        <div class="countdown-finished">

            <span class="finished-icon">
                ⚽
            </span>

            <span class="finished-text">
                ${eventName} já aconteceu
            </span>

        </div>
    `;

}

/* ==================================================
   FORMATADOR
   ================================================== */

function pad(number) {

    return String(number)
        .padStart(2, "0");

}

/* ==================================================
   UTILIDADE
   ================================================== */

function getRemainingDays(
    targetDate
) {

    const now = new Date();

    const difference =
        targetDate - now;

    return Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

}

/* ==================================================
   UTILIDADE
   ================================================== */

function getRemainingHours(
    targetDate
) {

    const now = new Date();

    const difference =
        targetDate - now;

    return Math.floor(
        difference /
        (1000 * 60 * 60)
    );

}

/* ==================================================
   UTILIDADE
   ================================================== */

function getRemainingMinutes(
    targetDate
) {

    const now = new Date();

    const difference =
        targetDate - now;

    return Math.floor(
        difference /
        (1000 * 60)
    );

}

/* ==================================================
   UTILIDADE
   ================================================== */

function getRemainingSeconds(
    targetDate
) {

    const now = new Date();

    const difference =
        targetDate - now;

    return Math.floor(
        difference /
        1000
    );

}

/* ==================================================
   API GLOBAL
   ================================================== */

window.Countdown = {

    startCountdown,

    calculateTimeRemaining,

    getRemainingDays,

    getRemainingHours,

    getRemainingMinutes,

    getRemainingSeconds

};

/* ==================================================
   LOG
   ================================================== */

console.log(
    "⏳ countdown.js carregado com sucesso"
);
