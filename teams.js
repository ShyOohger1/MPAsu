const teams = [
    { code: "A", name: "Team A", players: ["Tugsu", "Boldo"], wins: 2, losses: 0, plusMinus: "+11" },
    { code: "B", name: "Team B", players: ["Bodio", "Temka"], wins: 2, losses: 0, plusMinus: "+17" },
    { code: "C", name: "Team C", players: ["Lkhagva", "Tushig.E"], wins: 2, losses: 0, plusMinus: "+4" },
    { code: "D", name: "Team D", players: ["Satai", "Bihanz"], wins: 1, losses: 1, plusMinus: "+8" },
    { code: "E", name: "Team E", players: ["Battulga", "OPEN"], wins: 0, losses: 2, plusMinus: "-22" },
    { code: "F", name: "Team F", players: ["Enkhe", "Marshie"], wins: 1, losses: 1, plusMinus: "+5" },
    { code: "G", name: "Team G", players: ["Bilgun", "Mandakh"], wins: 0, losses: 2, plusMinus: "-12" },
    { code: "H", name: "Team H", players: ["Dul", "Tushig.B"], wins: 0, losses: 2, plusMinus: "-11" }
];

const grid = document.querySelector(".teams-grid");

teams.forEach(team => {
    const row = document.createElement("div");
    row.className = "team-row";

    row.innerHTML = `
        <div class="team-left">
            <h3>${team.name}</h3>
            <p>${team.players[0]}</p>
            <p>${team.players[1]}</p>
        </div>
        <div class="team-right">
            <p>W: ${team.wins}</p>
            <p>L: ${team.losses}</p>
            <p> ${team.plusMinus}</p>
        </div>
    `;

    grid.appendChild(row);
});
