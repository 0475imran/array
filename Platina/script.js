let passagiers = ["Jan", "Emma", "Tom"];

toonLijst();

function toonLijst() {
    let lijst = document.getElementById("lijst");
    lijst.innerHTML = "";

    for (let i = 0; i < passagiers.length; i++) {
        lijst.innerHTML += "<li>" + passagiers[i] + "</li>";
    }
}

function instappen() {
    let naam = "Passagier" + (passagiers.length + 1);

    passagiers.push(naam);

    toonLijst();

    alert(naam + " is ingestapt.");
}

function uitstappen() {
    if (passagiers.length > 0) {
        let naam = passagiers.pop();

        toonLijst();

        alert(naam + " is uitgestapt.");
    }
}