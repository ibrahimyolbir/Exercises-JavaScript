
let btn = document.querySelector("#button");


btn.addEventListener('click', function () {
    addItem();
});
let todos = [];
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
    
    todos.push(li)
    li.innerHTML += "<button onclick='deleteItem(this);'>Delete</button>";
}

function deleteItem(currentElement) {
    currentElement.parentNode.parentNode.removeChild(currentElement.parentNode);
}
 