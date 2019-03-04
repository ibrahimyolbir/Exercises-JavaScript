
// //==========================================================================================//
// // Skapa en klass Point som representerar en punkt i 2D. En punkt har ett x-värde och
// // ett y-värde.
// // Klassen ska ha en metod plus som tar en annan punkt som värde. Funktionen ska
// // returnera en ny punkt där den nya punkten har sitt x-värde satt till summan av
// // x-värdena i den andra punkterna, och samma för y-värdet. Lägg också till en annan
// // metod subtract som gör inversen av plus.
// // Därefter lägg till en tredje metod multiply som tar ett nummer som argument.
// // Denna metoden ska returnera en ny punkt med x och y värdena multiplicerade med
// // argumentet.
// //==========================================================================================//
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// };

// Point.prototype.plus = function (other) {
//     let x = this.x + other.x;
//     let y = this.y + other.y;
//     let newPoint = new Point(x, y);
//     return newPoint
// }
// Point.prototype.subtract = function (other) {
//     let x = this.x - other.x;
//     let y = this.y - other.y;
//     let newPoint = new Point(x, y);
//     return newPoint
// }

// Point.prototype.multiply = function (n) {
//     return new Point(this.x * n , this.y * n);
// }
// // Point.prototype.multiply = function(other){
// //     let x = this.x * other.x;
// //     let y = this.y * other.y;
// //     let newPoint = new Point(x,y);
// //     return newPoint
// // }

// let point1 = new Point(2, 3);
// console.log(point1);
// let point2 = new Point(7, 8);
// console.log(point2);
// let point3 = point1.plus(point2);
// console.log(point3);
// let point4 = point2.subtract(point1);
// console.log(point4);
// // let point5 = point1.multiply(point2);
// // console.log(point5);
// let point5 = point1.multiply(2);
// console.log(point5);


// //==========================================================================================//
// // Skriv en funktion factorial som tar ett nummer som argument. Funktionen ska
// // returnera fakulteten för ett nummer. Lös övningen med en rekursiv funktion.
// // T.ex factorial(3) // -> 6
// //==========================================================================================//
// var factor = function(number) {
//     var result = 1;
//     var count;
//     for (count = number; count > 1; count--) {
//       result *= count;
//     }
//     return result;
//   };
//   console.log(factor(3));
//   // 720

// //==========================================================================================//
// //   Övning - Prompt
// // Återskapa prompt funktionen själv. Din egna funktion ska själv rendera ett
// // popup-fönster där det meddelandet vi anger till funktionen ska visas. Det ska också
// // finnas ett input fält där vi kan skriva in ett svar. Din funktion ska returnera värdet vi
// // har angett i input fältet. Notera att du måste returnera värdet med en callback eller
// // promise.
// //==========================================================================================//

// // function promptFoo (){
// //     let favTeam = prompt("What is your favorite team?")
// // }

// // promptFoo ()


// let homePage = document.querySelector("#home");
// let aboutPage = document.querySelector("#about");
// let contactPage = document.querySelector("#contact");

// for (let i = 0 ; tabs.length; i++){

// }
// function activiteSection() {
//     homePage.style.display = "none";
//     aboutPage.style.display = "none";
//     contactPage.style.display = "none";
//     activPage.style.display = "block";
// }
// activiteSection()
