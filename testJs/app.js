// // 1 // Summera alla tal mellan 0 och 12
// function sumNumbers() {
//     let sum = 0;
//     for (let i = 1; i <= 12; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }
// sumNumbers()
// // 2 // Kopiera denna arrayen [2, 99, 47, 32, 5] och summera alla tal i den 
// function sumArr() {
//     let add = 0;
//     function addition(numbers) {
//         for (let i = 0; i < numbers.length; i++) {
//             add += numbers[i];
//         }
//         return add;
//     }
//     console.log(addition([2, 99, 47, 32, 5]));
// }
// sumArr()
// // 3 // Kopiera samma array som i andra övningen, men summera bara tal över 10
// function sumArr185() {
//     let add1 = 0;
//     function addition1(numbers1) {
//         for (let i = 0; i < numbers1.length; i++) {
//             if (numbers1[i] > 10) {
//                 add1 = add1 + numbers1[i];
//             }
//         }
//         return add1;
//     }
//     console.log(addition1([2, 99, 47, 32, 5]));
// }
// sumArr185()
// // 4 //Kopiera arrayen under och summera alla tal under value nyckeln för varje
// //     [{value: 6}, {value: 9}, {value: 23}, {value: 55}]

// function objectArray() {
//     let array = [{ value: 6 }, { value: 9 }, { value: 23 }, { value: 55 }];
//     let sum = 0;
//     for (let object of array) {
//         sum += object.value;
//     }
//     console.log(sum);
// }
// objectArray()



// function ButtonCount() {
//     let button = document.createElement("button");

//     document.body.appendChild(button);
//    let  i = 0;
//     button.textContent = i;
//     button.addEventListener("click", function () {
//         i++;
//         button.textContent = i; 
//     });
// }
//   new ButtonCount();
//   new ButtonCount();

function logValue() {
    console.log(this.value);
   }
   let a = {value: 3};
   a.logValue = logValue;
   a.logValue(); // -> 3