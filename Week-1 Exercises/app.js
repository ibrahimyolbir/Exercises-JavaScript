
//==================================================================================================================//
//========== Triangle Excercies
//==================================================================================================================//

// function triangle(){

//     for(var i = 0; i < 8; i++){
//         tria = "";
//         for(var x=0; x < i; x++){
//           tria = tria + "#"  
//         }
//         console.log(tria);    
//     }
//     return tria ;
// }
// triangle()
//==================================================================================================================//
//========== Word count Excercies
//==================================================================================================================//

// function wordCount(count) {
//     var sum = count.split(" ");
//     var number=0;
//     for (var i = 0; i < sum.length; i++) {
//         number = sum.length;
//         console.log(number);
//     }
// return number;
// }
// wordCount("Hello World ibo");

//==================================================================================================================//
//========== Palindrom Excercies
//==================================================================================================================//


// function palindrom(word) {
//     var lowerCase = word.toLowerCase();
//     console.log(lowerCase);
//     var splited = lowerCase.split("");
//     console.log(splited);
//     var reversed = splited.reverse();
//     console.log(reversed);
//     var joined = splited.join("");
//     console.log(joined);
//     if (joined === lowerCase){
//         console.log("TRUE");

//     }else{
//         console.log("FALSE");
//     }
// }
// palindrom("Step on no pets")

//==================================================================================================================//
//========== Adder Excercies
//==================================================================================================================//
// function myFunction(){
//     var a = prompt("Enter first number");
//     var b = prompt("Enter second number");
//     alert("Result " + a + b);
// }

// myFunction()

//==================================================================================================================//
//========== Pangram Excercies
//==================================================================================================================//

// var ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split("");


// function pangram(senteNce) {
//     var trimed = senteNce.replace(/\s/g, '');
//     console.log(trimed);
//     var lowerCase = trimed.toLowerCase();
//     var sentenceArray = lowerCase.split("");
//     console.log(sentenceArray);


//     for (let i = 0; i < sentenceArray.length; i++) {
//         var isPangram = false;
//         for (let j = 0; j < ALPHABET.length; j++) {
//             if (sentenceArray[i] == ALPHABET[j]) {
//                 isPangram = true;
//                 break;

//             }
//         }
//         if (!isPangram) {
//             break;
//         }
//     }
//     return isPangram;


// }
// pangram('The quick brown fox jumps over the lazy dog');
// console.log("1 = " + pangram('The quick brown fox jumps over the lazy dog'));
// console.log("2 = " + pangram('The quööööick brown fox jumps over the lazy dog'));

//==================================================================================================================//
//========== Range Excercies
//==================================================================================================================//

// **************Write a function range that takes two number arguments, ****************************
//**************start and end, and returns an array with all numbers from start to end.**************
// function range(a, b) {
//     for (var i = a; i < b; i++) {
//         var range = i;
//         console.log(range);
//     }
// }
// range(4, 10);

// **************Write a function sum that takes an array of numbers and returns the summed value.****************************

// function sum(numbers) {

//     if ( Array.isArray(numbers)){
//         total = 0;
//         for (var i = 0; i < numbers.length; i++) {
//             total +=  numbers[i];
//         }
//         return total;
//     } else {
//         console.log("Please provite an Array.");
//     return null;    
//     }


// }
// console.log(sum([1, 2, 3]));
// console.log(sum([5, 7, 9,11,56]));
// console.log(sum([])); 
// console.log(sum(""));
// console.log(sum(null));
// console.log(sum(-1));


// function rangeSum(x, y) {
//     var total = 0;
//     for (var i = x; i < y; i++) {
//         total += i;
//     }
//     console.log(total);
// }

// rangeSum(1, 4);
// rangeSum(5, 20);
// rangeSum(1, 1000);


//ödev: verilen cumlede rakam kontrulu programini yaz.
//alpabeyi map data yapaisini kllanrak yap bir onceki ornegi (set)

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split("");
var charCodeArray = [];
function transformWord(type, sentence, shiftNumber) {
    var arraySentence = sentence.split("");
    var encodeArray = [];
    if (type == "ENCODE") {
        for (let i = 0; i < arraySentence.length; i++) {
            encodeArray[i] = String.fromCharCode(arraySentence[i].charCodeAt(0) - shiftNumber);
        }
        return encodeArray;
    } else if (type == "DECODE") {
        for (let i = 0; i < arraySentence.length; i++) {
            encodeArray[i] = String.fromCharCode(arraySentence[i].charCodeAt(0) + shiftNumber);
        }
        return encodeArray;
    } else {
        console.log("Hatali Giris yaptiniz.");
    }
}


function ceasarChiper() {
    for (var i = 0; i < ALPHABET.length; i++) {
        charCodeArray[i] = String.fromCharCode(ALPHABET[i].charCodeAt(0));
        console.log(charCodeArray[i]);
        console.log(ALPHABET[i].charCodeAt(0));
    }
}


ceasarChiper()

console.log(transformWord("ENCODE", "helin", 3));
console.log(transformWord("x", "helin", 3));
console.log(transformWord("DECODE", "ebifk", 3));


//  H  = E  
//  E  = B
//  L  = I
//  I  = F
//  N  = K