// var x=3;
// if (x === 4){
//     console.log("TRUE");
// } else{
//     console.log("FALSE");

// }

//Övning - Loop
//==========================================================================================//
//==========Skriv en loop som skriver ut “Hello, World!” 20 gånger==========================//
//==========================================================================================//
// var i ;
// for(i = 0; i < 20; i++){
//     console.log(i +  " Hello World");
// }
//============================================================================================================//
//==========Skriv en loop som summerar alla tal mellan 0 och 100. Vad är resultatet?==========================//
//============================================================================================================//
// var sum=0;
// for (i = 0; i < 100; i++){
//     sum = sum + i;
// }
// console.log("sum is " + sum);
//==================================================================================================================//
//==========Skriv en loop som summerar alla jämna tal mellan 0 och 100. Vad är resultatet?==========================//
//==================================================================================================================//

// var sum=0;
// for (i = 0; i < 100; i+=2){
//     sum = sum + i;
// }
// console.log("sum is " + sum);

//==================================================================================================================//
//==========Skriv en loop som summerar alla ojämna tal mellan 0 och 100. Vad är resultatet?==========================//
//==================================================================================================================//

// var sum=0;
// for (i = 0; i < 100; i+=3){
//     sum = sum + i;
// }
// console.log("sum is " + sum);

//==================================================================================================================//
//==========Skriv en loop som summerar alla tal mellan 0 och 100 förutom de tal som är jämnt delbara med 10 10, 20, 30,==========================//
//==================================================================================================================//

// var sum=0;
// for (i = 0; i < 100; i++){
//     if(i === 10 || i === 20 || i === 30 || i === 40 || i === 50 || i === 60 || i === 70 || i === 80 || i === 90) continue;
//     sum = sum + i;
// }
// console.log("sum is " + sum);

// var sum = 0;
// for (i = 0; i < 100; i++) {
//     if ((i % 10) !== 0)
//         sum = sum + i;
// }
// console.log("sum is " + sum);

//==================================================================================================================//
//==========Skapa en Array som innehåller alla tal mellan 0 och 100 Tips: Använd en for-loop och push()//
//==================================================================================================================//

// var myArray = [];
// var i;
// for (i = 0; i < 100; i++) {
//     myArray.push(i);
// }
// console.log(myArray);
// for (i = 0; i < myArray.length; i++) {

// }


//==================================================================================================================//
//==========Skriv en funktion isBetween(x, from, to) som returnerar true om x ligger mellan tooch from och annars returnerar false/
//==================================================================================================================//

// function isBetween(x, from, to){
//     if (x > from  && x < to){
//         return true; 
//     } else {
//         return false;
//     }
// }

// console.log(sBetween(10,0,20);

// note ------ return x > from  && x < to (if yerine sadece bu kullabilir daha kisa )
//==================================================================================================================//
//==========Skriv en funktion range(to, from) som returnerar en Array som innehåller värdena mellan to och from/
//==================================================================================================================//

// function range(to, from) {
//     var myArray = [];
//     for (i = to; i < from ; i++) {
//         myArray.push(i);
//     }
//     console.log("array " + myArray);
//     return myArray
// }
// var x = range(3, 10);

//==================================================================================================================//
//==========Skriv en funktion min(a, b) som returnerar det minsta värdet av a och b/
//==================================================================================================================//


// function min(a,b){
//     if (a < b){
//         return a;
//     }else{
//         return b;
//     }
// };
// console.log(min(20,10));


// var ages = [];

// function getAgeGroup(age) {
//     if (age > 0) {
//         var group = "";
//         if (age >= 0 && age < 20) {
//             group = "kid";
//         } else if (age >= 20 && age < 30) {
//             group = "Young and Healty";
//         } else if (age >= 30 && age < 50) {
//             group = "Very Old";
//         } else if (age >= 20 && age < 30) {
//             group = "Other";
//         }
//     }
//     return group;
// }

// for (var i = 0 ; i < ages.length; i++){
//     var age = ages[i]
//     var group = i + " : " getAgeGroup(age)
// }


//==================================================================================================================//
//==========Skriv en funktion longestWord(sentence) som tar en mening, sentence, och returnerar det längsta ordet i meningen longestWord(“I love JavaScript”); // “JavaScript”
//==================================================================================================================//

// function longestWord(myString) {
//     var arr = myString.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < arr.length; i++) {
//         if (longest < arr[i].length) {
//             longest = arr[i].length;
//             word = arr[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord("I Love Javascript"));

//==================================================================================================================//
//==========Skriv en funktion reverseString(str) som tar en sträng, str, och returnerar strängen baklänges reverseString(“Hello”); // “olleH”
//==================================================================================================================//
function reverseString(str) {
    var result ;
    for (var i = str.length; i > 0; i--) {
        console.log(str[i]);
        result += str[i];
    }
    return result;
}
var reversed = reverseString("Hello");

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello"));
