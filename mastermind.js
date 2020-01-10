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
    var combObject = document.createElement("div");
     
    var tempPinArray = document.createElement("div");
    var tempKeuzeArray = document.createElement("div");
    for(var locatieInRij = 0; locatieInRij < 2; locatieInRij++){
        var obj = document.createElement("div");
        obj.className = "blokje"
        var obj1 = document.createElement("div");
        obj1.className = "blokje1"
        tempPinArray.appendChild(obj);
        tempPinArray.appendChild(obj1);
    }
    for(var plaatsInRij = 0; plaatsInRij < 4; plaatsInRij++) {
        var obj = document.createElement("div");
        obj.className = "rondje"
        tempKeuzeArray.appendChild(obj);
    }
    combObject.appendChild(tempPinArray);
    combObject.appendChild(tempKeuzeArray);
    document.body.appendChild(combObject);
    keuzeArray.push(combObject);
}