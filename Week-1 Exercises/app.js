
let firstDate = new Date("7/01/2018");
let lastDate = new Date("8/31/2018");

let getDateArray = function (first, last) {
    let arr = [];
    let dt = new Date(first);

    while (dt <= last) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}
let dateArr = getDateArray(firstDate, lastDate)

 console.log(dateArr);

for (var i = 0; i < dateArr.length ; i++) {
     console.log( dateArr[i].getFullYear() + "-" + dateArr[i].getDate() + "-" + (dateArr[i].getMonth()+1)) ;  
}


//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//

// function double(num) {
//     return 2 * num + 5
// };

// function addFive(num2) {
//     return (10 + 5) * num2;
// };

// console.log(double(10)); // => 25
// console.log(addFive(2)); // => 30



//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//




// document.querySelector('button').addEventListener('click', function () {
//     let inputSring = document.querySelector('input').value;
//     let input = inputSring.replace(/\s+/g, '');
//     var splited = [];
//     if (input.includes("+")) {
//         splited = input.split("+");
//         console.log(parseInt(splited[0]) + parseInt(splited[1]));
//     } else if (input.includes("-")) {
//         splited = input.split("-");
//         console.log(parseInt(splited[0]) - parseInt(splited[1]));
//     } else if (input.includes("*")) {
//         splited = input.split("*");
//         console.log(parseInt(splited[0]) * parseInt(splited[1]));
//     } else if (input.includes("/")) {
//         splited = input.split("/");
//         console.log(parseInt(splited[0]) / parseInt(splited[1]));
//     }
//     else {
//         console.log("You have entered an incorrect number. Please check again.");
//     }
//     return splited;
// });





// var inputIdFirst = "valueOfX",inputIdSecond = "valueOfY",outputId = "resultHere";
// var getInputs = function(id) {
//   return parseInt(document.getElementById(id).value);
// }
// var showOutput = function(outputValue, outputIdAsArg) {
//   //if no argument is given then by default "outputId" taken
//   document.getElementById(outputId).innerHTML = outputValue;
// }
// var manuplateAs = function(operationName, valueOfX, valueOfY) {
//   if(operationName == 'add')
//     return valueOfX + valueOfY;
//   else if(operationName == 'sub')
//     return valueOfX - valueOfY;
//   else if(operationName == 'mul')
//     return valueOfX * valueOfY;
//   else if(operationName == 'div')
//     return valueOfX / valueOfY;
//   //can add as many as you wish 
// } 
// var operation = function(operationName){
//   x = getInputs(inputIdFirst);
//   y = getInputs(inputIdSecond);
//   output = manuplateAs(operationName, x, y);
//   showOutput(output);
//   console.log(x + " " + operationName + " " + y + " = " + output)
//   //see console to understand this more
//   console.log(this)
// };
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
// function searchForMeaning(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === 42) {
//             return "Meaning found at " + i;
//         } 
//     }
//     return "Not found";
// }

// console.log(searchForMeaning([1, 5, 42, 99]));
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
// function lessThan10(value) {
//     return value < 10;
//    }
//    function filter(arr, f) {
//     let newArray = [];
//     for (let x of arr) {
//     if (f(x)) newArray.push(x);
//     }
//     return newArray;
//    }
//    console.log(filter([1, 2, 4, 20, 33], lessThan10));
    
// {
// function lessThan10(numbers) {
//     let nyArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 10) {
//             nyArray.push(numbers[i]);
//         }
//     }
//     return nyArray;
// }
// console.log(lessThan10([1, 2, 4, 8, 16, 32]));
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//


// function doubleAll(num) {
//     return num.map(function (x) {
//        return x * 2;
//    });
// }


// function doubleAll(num) {
//     let newArr = [];
//     for (let i = 0; i < num.length; i++){
//         
//             newArr.push(num[i] *2 );
// for (let x of arr)
// newArray.push(x*2)
//       
//     }
// }


// function doubleAll(num) {
//     return num.reduce(function (accumulator, currentValue) {
//        return accumulator  + currentValue;
//    },0);
// }


//  console.log(doubleAll([2, 4, 6]));
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//


// function myFunc1(y) {
//     console.log("after wait log");
//     y();
// };

// function myFunc2(x) {
//     console.log("2sec wait");
//     x();
// };
// function myFunc3(z) {
//     console.log("4sec");
//     z()
// }

// setTimeout(function myFunc3() {
//     myfunc3(myFunc2(myFunc1));

// }, 2000);


// function callbackFunction () {
//     console.log("I was run after delayed function" );
//     }
// function delayedFunction (cb) {
//     console.log("I waited 2 seconds before doing this" );
//     setTimeout(function() {cb();
//         }, 2000);
//         console.log("After timeout" );

//     }

//     console.log("I will call functions 2 seconds later" );
//  setTimeout(function() {
//     delayedFunction(callbackFunction);
//     }, 2000);

//     console.log("final termi");
    

//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//

// function mean(myArr) {

//     var total = myArr.reduce(function (acc, currentValue) {
//         return acc + currentValue;
//     });
//     return total / myArr.length;
// }


// console.log(mean([1, 2, 3, 4, 5, 6]));


//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//
//==================================================================================================================//

// function wordCount(words) {
//     let splited = words.split(" ");
//     var bananaCount = 0;
//     var carrotCount = 0;
//     for (let i = 0; i < splited.length; i++) {
//         if (splited[i] === "Banana") {
//             bananaCount ++;

//         }
//         if (splited[i] === "Carrot") {
//             carrotCount ++;

//         }
//     }
//     let myObj = {"banana":bananaCount,"carrot":carrotCount};
//     return myObj;


// }
// console.log(wordCount("Banana Carrot Banana"));

