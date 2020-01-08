var kleur = [
    "red",
    "blue",
    "green",
    "white",
    "black",
    "yellow"
];

// [Math.floor(Math.random() * kleur.length)]

var keuzeArray = [];
for(var rij = 0; rij < 12; rij++) {
    var tempKeuzeArray = document.createElement("div");
    for(var plaatsInRij = 0; plaatsInRij < 4; plaatsInRij++) {
        var obj = document.createElement("div");
        tempKeuzeArray.appendChild(obj);
    }
    keuzeArray.push(tempKeuzeArray);
}