
let btn = document.querySelector("#button");


btn.addEventListener('click', function () {
    addItem();
});

function addItem() {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#input').value;
    let elementText = document.createTextNode(inputValue);
    li.appendChild(elementText);
    if (inputValue === '') {
        alert('write something!!!');
    } else {
        document.querySelector("#ulList").appendChild(li);
    }
    document.querySelector('#input').value = "";
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("x");
    // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);
    li.innerHTML += "<button onclick='deleteItem(this);'>Delete</button>";
}
function deleteItem(currentElement){
    currentElement.parentNode.parentNode.removeChild(currentElement.parentNode);
}
// let closeBtn = document.querySelector(".close");


// closeBtn.addEventListener('click', function () {
//     removeItem();
// });
// function removeItem(){
    
// };

// for (i = 0; i < close.length; i++) {    
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }
