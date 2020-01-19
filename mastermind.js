var kleur = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Black",
    "Yellow"
];
var antwoordArray = [];
var antwoord1 = document.getElementById("antwoord1");
   antwoord1 = kleur[Math.floor(Math.random() * kleur.length)]
   antwoordArray.push(antwoord1);
    console.log(antwoord1)
var antwoord2 = document.getElementById("antwoord2");
    antwoord2 = kleur[Math.floor(Math.random() * kleur.length)]
    antwoordArray.push(antwoord2);
    console.log(antwoord2)
var antwoord3 = document.getElementById("antwoord3");
    antwoord3 = kleur[Math.floor(Math.random() * kleur.length)]
    antwoordArray.push(antwoord3);
    console.log(antwoord3)
var antwoord4 = document.getElementById("antwoord4");
    antwoord4 = kleur[Math.floor(Math.random() * kleur.length)]
    antwoordArray.push(antwoord4);
    console.log(antwoord4)
console.log(antwoordArray)
    document.getElementById("buttoncheck").onclick = checkColor;
var gekozenArray = [];
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

    for(var locatieInRij = 0; locatieInRij < 4; locatieInRij++){
        var obj = document.createElement("div");
        obj.className = "blokje"
        tempPinArray.appendChild(obj);
        arrayobj.push(obj);
    }

    for(var plaatsInRij = 0; plaatsInRij < 4; plaatsInRij++) {
        var circle = document.createElement("div");
        circle.className = "rondje";
        circle.objNumber = plaatsInRij;
        circle.style.backgroundColor = "lavender";
        circle.addEventListener("click", function () {
            select(this.objNumber);
        })
        circle.selected = false
        tempKeuzeArray.appendChild(circle);
        circles.push(circle)
    }
    
    array.push(arrayobj);
   
    combObject.appendChild(tempPinArray);
    combObject.appendChild(tempKeuzeArray);
    document.body.appendChild(combObject);
    keuzeArray.push(combObject); 
     console.log(tempPinArray);
    console.log(tempKeuzeArray);
   console.log(combObject);
    
}
for(i=0;i<12;i++){
    for(n=0;n<4;n++){
       array[i][n].style.display ="inline-block";
    }
}
console.log(array);
console.log(keuzeArray);
console.log(circles)
var beurt = 11;
function select(place){
    for(var i = 0; i < circles.length; i++) {
        circles[i].selected = false;
        
        circles[i].style.borderColor = "grey";
    }
    circles[beurt * 4 + place].style.borderColor = "purple";
    circles[beurt * 4 + place].selected = true;
    
}

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

    var buttonpurple = document.getElementById("buttonPurple");
    buttonpurple.addEventListener("click", function() {
        buttonAction("purple");  
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
        for (let index = 0; index < circles.length; index++) {
            if(circles[index].selected == true){
                circles[index].selected = false
                circles[index].style.backgroundColor = color;
            }
        }
    }

function checkColor(){
    alert("het werkt")
    for(var i = 0; i < 4; i++){
        if(circles[beurt * 4 + i].style.backgroundColor == antwoordArray[i]){
            tempPinArray[i].style.backgroundColor = "red"
        }
    }

}
// blokjes[lijnY][lijnX].style.backgroundColor = "#000000"