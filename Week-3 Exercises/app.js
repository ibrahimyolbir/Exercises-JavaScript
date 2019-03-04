let counter = {
  count: 0,
  increase: function () {
    this.count++;
  },
  log: function () {
    console.log(this.count);
  }
}
for (let i = 0; i < 10; i++) {
  counter.increase();
}

counter.log();




function Counter(newNumber) {
  this.count = newNumber;
  this.increase = function () {
    this.count++;
  }
  this.log = function () {
    console.log(this.count);
  }
}

let counter = new Counter(2);
counter.log();
counter.increase();
let counter2 = new Counter(5);
counter2.log();
counter2.increase();


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

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
//     this.x = 0;
//     this.y = 0;
// }

// Rectangle.prototype.area = function () {
//     return this.width * this.height;
// }

// Rectangle.prototype.scale = function (n) {
//     this.width = this.width * n;
//     this.height = this.height * n;
// }

// Rectangle.prototype.setSize = function (width, height) {
//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.setPos = function (x, y) {
//     this.x = x;
//     this.y = y;
// }

// Rectangle.prototype.translate = function (x, y) {
//     this.x += x;
//     this.y += y;
// }

// let rectangle = new Rectangle(50, 50);
// //   rectangle.scale(2);
// rectangle.setSize(60, 15);
// rectangle.setPos(-10, 0);
// //   rectangle.translate(5,5);
// let canvas = document.getElementById('canvas');
// canvas.width = 1000;
// canvas.height = 1000;
// let ctx = canvas.getContext('2d');
// let count = 0;
// let isSwitched = false;
// let isSwitched2 = false; 
// let isSwitched3 = false;
// setInterval(function () {
//     ctx.clearRect(0, 0, 1000, 1000);
//     ctx.fillStyle = 'green';
//     ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
//     if (count < 95) {
//         rectangle.translate(10, 0);
//     } else if (count < (95 + 47)) {
//         rectangle.translate(0, 10);
//         if (!isSwitched) {
//             rectangle.setSize(rectangle.height, rectangle.width);
//             isSwitched = true;
//         }
//     } else if (count < (95 + 47 + 95)) {
//         rectangle.translate(-10, 0);
//         if (!isSwitched2) {
//             rectangle.setSize(rectangle.height, rectangle.width);
//             isSwitched2 = true;
//         }
//     } else if (count < (95 + 47 + 95 + 47)) {
//         rectangle.translate(0, -10);
//         if (!isSwitched3) {
//             rectangle.setSize(rectangle.height, rectangle.width);
//             isSwitched3 = true;
//         }
//     }
//     count++;
// }, 20);

