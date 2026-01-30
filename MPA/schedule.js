const teamMap = {
    A: { name: "Team A", players: ["Tugsu", "Boldo"] },
    B: { name: "Team B", players: ["Bodio", "Temka"] },
    C: { name: "Team C", players: ["Lkhagva", "Tushig.E"] },
    D: { name: "Team D", players: ["Satai", "Bihanz"] },
    E: { name: "Team E", players: ["Battulga", "OPEN"] },
    F: { name: "Team F", players: ["Enkhe", "Marshie"] },
    G: { name: "Team G", players: ["Bilgun", "Mandakh"] },
    H: { name: "Team H", players: ["Dul", "Tushig.B"] }
};

const games1 = [
    { left: "A", right: "H", scoreLeft: 16, scoreRight: 12 },
    { left: "B", right: "G", scoreLeft: 16, scoreRight: 11 },
    { left: "C", right: "F", scoreLeft: 16, scoreRight: 14 },
    { left: "D", right: "E", scoreLeft: 16, scoreRight: 6 }
];

const games2 = [
    { left: "A", right: "G", scoreLeft: 16, scoreRight: 9 },
    { left: "H", right: "F", scoreLeft: 9, scoreRight: 16 },
    { left: "B", right: "E", scoreLeft: 16, scoreRight: 4 },
    { left: "C", right: "D", scoreLeft: 16, scoreRight: 14 }
];

const games3 = [
    { left: "A", right: "F", scoreLeft: 0, scoreRight: 0 },
    { left: "G", right: "E", scoreLeft: 0, scoreRight: 0 },
    { left: "H", right: "D", scoreLeft: 0, scoreRight: 0 },
    { left: "B", right: "C", scoreLeft: 0, scoreRight: 0 }
];

const games4 = [
    { left: "A", right: "E", scoreLeft: 0, scoreRight: 0 },
    { left: "F", right: "D", scoreLeft: 0, scoreRight: 0 },
    { left: "G", right: "C", scoreLeft: 0, scoreRight: 0 },
    { left: "H", right: "B", scoreLeft: 0, scoreRight: 0 }
];

const games5 = [
    { left: "A", right: "D", scoreLeft: 0, scoreRight: 0 },
    { left: "E", right: "C", scoreLeft: 0, scoreRight: 0 },
    { left: "F", right: "B", scoreLeft: 0, scoreRight: 0 },
    { left: "G", right: "H", scoreLeft: 0, scoreRight: 0 }
];

const games6 = [
    { left: "A", right: "C", scoreLeft: 0, scoreRight: 0 },
    { left: "D", right: "B", scoreLeft: 0, scoreRight: 0 },
    { left: "E", right: "H", scoreLeft: 0, scoreRight: 0 },
    { left: "F", right: "G", scoreLeft: 0, scoreRight: 0 }
];

const games7 = [
    { left: "A", right: "B", scoreLeft: 0, scoreRight: 0 },
    { left: "C", right: "H", scoreLeft: 0, scoreRight: 0 },
    { left: "D", right: "G", scoreLeft: 0, scoreRight: 0 },
    { left: "E", right: "F", scoreLeft: 0, scoreRight: 0 }
];

function renderGames(games, containerId) {
    const container = document.getElementById(containerId);

    games.forEach(game => {
        const leftTeam = teamMap[game.left];
        const rightTeam = teamMap[game.right];

        const showScore = !(game.scoreLeft === 0 && game.scoreRight === 0);

        let leftClass = "";
        let rightClass = "";

        if (showScore) {
            if (game.scoreLeft > game.scoreRight) {
                leftClass = "winner";
                rightClass = "loser";
            } else if (game.scoreRight > game.scoreLeft) {
                rightClass = "winner";
                leftClass = "loser";
            }
        }

        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
            <div class="team left ${leftClass}">
                <h3>${leftTeam.name}</h3>
                <p>${leftTeam.players[0]}</p>
                <p>${leftTeam.players[1]}</p>
            </div>

            <div class="vs">
                VS
                ${
                    showScore
                        ? `<div class="score">
                                <span class="${leftClass}">${game.scoreLeft}</span>
                                <span class="colon"> : </span>
                                <span class="${rightClass}">${game.scoreRight}</span>
                           </div>`
                        : ""
                }
            </div>

            <div class="team right ${rightClass}">
                <h3>${rightTeam.name}</h3>
                <p>${rightTeam.players[0]}</p>
                <p>${rightTeam.players[1]}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

renderGames(games1, "games1");
renderGames(games2, "games2");
renderGames(games3, "games3");
renderGames(games4, "games4");
renderGames(games5, "games5");
renderGames(games6, "games6");
renderGames(games7, "games7");
