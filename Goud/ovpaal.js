// Opdracht 1
let passagiers = [
    {
        naam: "Leo Daams",
        saldo: 34,
        woonplaats: "Den Bosch",
        telefoonnummer: "0612345678"
    },
    {
        naam: "Nicole Hops",
        saldo: 18,
        woonplaats: "Maastricht",
        telefoonnummer: "0687654321"
    }
];

// Opdracht 2 - nieuwe passagier toevoegen
passagiers.push({
    naam: "Tom Janssen",
    saldo: 25,
    woonplaats: "Roermond",
    telefoonnummer: "0665432198"
});

console.log("Nieuwe passagier toegevoegd:");
console.log(passagiers);

// Opdracht 2 - inchecken
passagiers[0].saldo = passagiers[0].saldo - 4;

console.log("Saldo na inchecken:");
console.log(passagiers[0]);

// Opdracht 2 - uitchecken
passagiers[0].saldo = passagiers[0].saldo - 2;

console.log("Saldo na uitchecken:");
console.log(passagiers[0]);

// Opdracht 2 - passagier verwijderen
passagiers.splice(1, 1);

console.log("Passagier verwijderd:");
console.log(passagiers);

// Opdracht 2 - lijst tonen
console.log("Overzicht van alle passagiers:");

for (let i = 0; i < passagiers.length; i++) {
    console.log(passagiers[i]);
}