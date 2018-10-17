
//=======================================================================================================================//
//==========Skriv en funktion logPerson som tar ett objekt som argument. Objektet ska====================================//
//==========Sinnehålla nycklarna name och age. I funktionen ska du skriva till konsolen texten.==========================//
//==========S“Name: NAME, Age: AGE” där NAME och AGE är värdena från objektet. Lägg.=====================================//
//==========Sgärna till validering i funktionen där du kollar om objektet har korrekt nycklar.==========================//
//======================================================================================================================//
//  function logPerson(myObj){
// console.log(myObj);
//  };

//  logPerson({name: "ibrahim", age: 26,});


//  document.getElementById('p1').style.color = "red"; 

// document.getElementsByTagName('p')[0].setAttribute("class", "colorChanger");


// document.getElementsByTagName("p")[0].setAttribute("class", "colorChanger");
// document.getElementById('color2').setAttribute("class", "colorChanger");


// var myDiv = document.getElementById("myDiv");

// var myPElements = myDiv.getElementsByTagName("p");


// for (var i = 0; i < myPElements.length; i++) {
//     var myPelement = myPElements[i];

//     var mySpans = myPelement.getElementsByTagName("span")[0];
//     console.log(mySpans);
//     mySpans.setAttribute("class", "colorChanger")

// }


// function createPtag(text) {
//     var p = document.createElement("p");
//     p.appendChild(document.createTextNode(text));
//     return p;
//   }
// var pTaggar = [
//     createPtag("ibrahim"),
//     createPtag("yolbir"),
//     createPtag("Ec Utbildning")
// ];

// for (var i=0; i < pTaggar.length; i++){
//     var bodyElement = document.querySelector("body");
//     bodyElement.appendChild(pTaggar[i]);
// }

// var p = document.createElement("p");
// p.textContent = "Hello World!"
// var myDiv = document.querySelector("#no-text");

// myDiv.appendChild(p);

// var removeText = document.querySelectorAll(".remove-me");
// console.log(removeText);
// for (var i = 0; i < removeText.length; i++) {
//     var removedText = removeText[i];
//     var main = document.querySelector("main");
//     main.removeChild(removedText);
//     console.log(main);

// }

function onClick(e) {
 
    var btn = document.getElementById("myInpt").value;
     document.getElementById("myBtn").value = btn;

    console.log(btn);
    console.log(myBtn);
    
    
}

document.querySelector('#myBtn').addEventListener('click', onClick);


