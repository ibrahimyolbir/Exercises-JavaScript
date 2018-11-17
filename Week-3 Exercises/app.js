// let counter = {
//   count: 0,
//   increase: function () {
//     this.count++;
//   },
//   log: function () {
//     console.log(this.count);
//   }
// }
// for (let i = 0; i < 10; i++) {
//   counter.increase();
// }

// counter.log();




// function Counter(newNumber) {
//   this.count = newNumber;
//   this.increase = function () {
//     this.count++;
//   }
//   this.log = function () {
//     console.log(this.count);
//   }
// }

// let counter = new Counter(2);
// counter.log();
// counter.increase();
// let counter2 = new Counter(5);
// counter2.log();
// counter2.increase();


// let isSync = false;
// let isFirstClicked=false;
// document.querySelector('button').addEventListener('click', function () {
//     let myGlobal;
//     let counterTags = document.createElement('h1');
//     document.querySelector('.countDownDiv').appendChild(counterTags);

//     let inputValue = document.querySelector('.countStart').value;
//     let lastChild = document.querySelector('.countDownDiv :last-child');


//     lastChild.innerHTML = inputValue;


//     myGlobal = setInterval(countDown, 1000, lastChild);
//     function countDown(lastChild) {
//         count = lastChild.textContent;
//         console.log(count);
//             count--;


//         lastChild.innerHTML = count;
//         if (count == 0) {
//             clearInterval(myGlobal);
//         }
//     }
// });

function Rectangle(num1, num2) {
    this.height = num1;
    this.width = num2;
    this.position;
    this.scale;

    this.setWidth = function (newWidth) {
        this.width = newWidth;
    }
    this.setHeight = function (newHeight) {
        this.height = newHeight;
    }
    this.setPosition = function (newPosition) {
        this.position = newPosition;
    }
    this.scale = function (newScale) {
        this.scale = newScale
    }
    this.area = function () {
        return this.height * this.width;
    }



}


let rectangle = new Rectangle(30, 40)
console.log(rectangle.area()); // -> 6
rectangle.setHeight(200);
rectangle.setWidth(100);

console.log(rectangle.scale(2, 3));

//rectangle.creteDivElement("div");
console.log(rectangle.area()); // -> 15



//Yeni div elementi olustur ve height ve widthi rectangle  yeni function yazarak yap
//

let colt = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi " + this.firstName
    },
    addNumbers: function (a,b,c,d) {
        return this.firstName + " just calculated " + (a+b+c+d);
    }
}

let elie = {
    firstName: "Elie"
}

console.log(colt.sayHi());
console.log(colt.sayHi.apply(elie));

 console.log(colt.addNumbers(1,2,3,4));
 
 console.log(colt.addNumbers.call(elie,1,2,3,4));
 console.log(colt.addNumbers.apply(elie,[1,2,3,4]));
 