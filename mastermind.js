var kleur = [
    "red",
    "blue",
    "green",
    "white",
    "black",
    "yellow"
];
var antwoord1 = document.getElementById("antwoord1");
   antwoord1 = kleur[Math.floor(Math.random() * kleur.length)]
    console.log(antwoord1)
var antwoord2 = document.getElementById("antwoord2");
    antwoord2 = kleur[Math.floor(Math.random() * kleur.length)]
    console.log(antwoord2)
var antwoord3 = document.getElementById("antwoord3");
    antwoord3 = kleur[Math.floor(Math.random() * kleur.length)]
    console.log(antwoord3)
var antwoord4 = document.getElementById("antwoord4");
    antwoord4 = kleur[Math.floor(Math.random() * kleur.length)]
    console.log(antwoord4)
// [Math.floor(Math.random() * kleur.length)]

var keuzeArray = [];
var array = [];
var circles = [];
for(var rij = 0; rij < 12; rij++) {
    var combObject = document.createElement("div");
    combObject.className = "achtergrond";
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
        var circle = document.createElement("div");
        circle.className = "rondje"
        circle.style.backgroundColor = "lavender";
        circle.addEventListener("click", function() {
            console.log(this.style.backgroundColor);
            this.selected = true
        })
        circle.selected = false
        tempKeuzeArray.appendChild(circle);
        circles.push(circle)
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

    var buttonred = document.getElementById("buttonRed");
    buttonred.addEventListener("click", function() {
        buttonAction("red");  
    })

    var buttonblue = document.getElementById("buttonBlue");
    buttonblue.addEventListener("click", function() {
        buttonAction("blue");  
    })

    var buttongreen = document.getElementById("buttonGreen");
    buttongreen.addEventListener("click", function() {
        buttonAction("green");  
    })

    var buttonwhite = document.getElementById("buttonWhite");
    buttonwhite.addEventListener("click", function() {
        buttonAction("white");  
    })

    var buttonblack = document.getElementById("buttonBlack");
    buttonblack.addEventListener("click", function() {
        buttonAction("black");  
    })

    var buttonyellow = document.getElementById("buttonYellow");
    buttonyellow.addEventListener("click", function() {
        buttonAction("yellow");  
    })

function buttonAction(color){
    console.log(" xd")
    console.log(circles)
        for (let index = 0; index < circles.length; index++) {
            console.log(circles[index].selected)
            if(circles[index].selected == true){
                circles[index].selected = false
                circles[index].style.backgroundColor = color;
            }
            
        }
    }
