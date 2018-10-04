
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


// function pangram(sentece){
//     var trimed = sentece.replace(/\s/g,'');
//     console.log(trimed);       
//     var lowerCase = trimed.toLowerCase();
//     console.log(lowerCase);
//     var splited = lowerCase.split("");
//     console.log(splited);    
//     var sorted = splited.sort();
//     console.log(sorted);
//     var joined = sorted.join("");
//     console.log(joined);

// var word = 'abcdefghijklmnopqrstuvwxyz';
// console.log(word);

//     if(joined === word){
//         console.log('true');

//     }

// }
// pangram('The quick brown fox jumps over the lazy dog')
//==================================================================================================================//
//========== Range Excercies
//==================================================================================================================//

// **************Write a function range that takes two number arguments, ****************************
//**************start and end, and returns an array with all numbers from start to end.**************
function range(a, b) {
    for (var i = a; i < b; i++) {
        var range = i;
        console.log(range);
    }
}
range(4, 10);

// **************Write a function sum that takes an array of numbers and returns the summed value.****************************

function sum([a,b,c]){

return [a+b+c];

}

console.log(sum([1,2,3]));

function rangeSum(x,y) {
    for(var i = x; i < y; i++)
    console.log(i);
 

}

rangeSum(1,4);