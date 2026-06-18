// Opdracht 1
let passagiers = [
    "Jan",
    "Piet",
    "Klaas",
    "Emma",
    "Sophie",
    "Lucas",
    "Noah",
    "Mila",
    "Liam",
    "Sara"
];

console.log("Passagiers in de bus:");

for (let i = 0; i < passagiers.length; i++) {
    console.log(passagiers[i]);
}

// Opdracht 2
passagiers.push("Tom");

console.log("Nieuwe passagier ingestapt:");

for (let i = 0; i < passagiers.length; i++) {
    console.log(passagiers[i]);
}

// Opdracht 3
passagiers.splice(4, 1);

console.log("Vijfde passagier is uitgestapt:");

for (let i = 0; i < passagiers.length; i++) {
    console.log(passagiers[i]);
}

// Opdracht 4
passagiers.sort(() => Math.random() - 0.5);

console.log("Nieuwe zitplaatsen:");

for (let i = 0; i < passagiers.length; i++) {
    console.log(passagiers[i]);
}

// Opdracht 5
while (passagiers.length > 0) {
    passagiers.pop();
    console.log("Nog " + passagiers.length + " passagiers in de bus.");
}