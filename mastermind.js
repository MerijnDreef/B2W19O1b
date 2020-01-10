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
var array = [];
for(var rij = 0; rij < 12; rij++) {
    var combObject = document.createElement("div");
    var tempPinArray = document.createElement("div");
    tempPinArray.className = "vierkant";
    var tempKeuzeArray = document.createElement("div");  
    tempKeuzeArray.className = "cirkel";
      
    var arrayobj = [];
    var arrayobj1 = [];
    for(var locatieInRij = 0; locatieInRij < 2; locatieInRij++){
        var obj = document.createElement("div");
        obj.className = "blokje"
        var obj1 = document.createElement("div");
        obj1.className = "blokje1"
        tempPinArray.appendChild(obj);
        tempPinArray.appendChild(obj1); 
        arrayobj.push(obj);
        arrayobj1.push(obj1);
    }
    
    for(var plaatsInRij = 0; plaatsInRij < 4; plaatsInRij++) {
        var obj = document.createElement("div");
        obj.className = "rondje"
        tempKeuzeArray.appendChild(obj);
    }
    
    array.push(arrayobj);
    array.push(arrayobj1);
    console.log(tempPinArray);
    console.log(tempKeuzeArray);
    console.log(combObject);
    combObject.appendChild(tempPinArray);
    combObject.appendChild(tempKeuzeArray);
    document.body.appendChild(combObject);
    keuzeArray.push(combObject);
}
for(i=0;i<24;i++){
    for(n=0;n<2;n++){
       array[i][n].style.display ="inline-block";
    }
}
console.log(array);
console.log(keuzeArray);