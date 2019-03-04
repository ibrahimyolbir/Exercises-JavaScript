let text = document.getElementById("myText");
let message = document.querySelector("p");
let btn = document.querySelector("button")
btn.addEventListener("click", validate);

function validate() {

    let value = text.value
    try {
        JSON.parse(value);
        message.textContent = "Valid JSON"

    } catch (err) {
        message.textContent = "Invalid JSON"
    }
}


function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);

}

console.log(fibonacci(7));





let tableData = [
    { name: 'Simba', animal: 'Lion' },
    { name: 'Timon', animal: 'Meerkat' },
    { name: 'Pumba', animal: 'warthog' }
]


let tables = ` 
<table style="width:100%">
    <thead>
        <tr>
            <th>Name</th>
            <th>Animal</th> 
        </tr>
    </thead>`
for (let i = 0; i < tableData.length; i++) {
    let animals = tableData[i];
    tables += `
     <tr>
       <td>${animals.name}</td>
       <td>${animals.animal}</td> 
     </tr>`
};
tables += `</table>`;


$('body').append(tables);

$("#input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});


let shoppingCart =
    [{ color: "red", name: "tv" },
    { color: "blue", name: "mouse" },
    { color: "green", name: "tv" },
    { color: "green", name: "cd" },
    { color: "red", name: "cycle" },
    { color: "blue", name: "cycle" },
    { color: "blue", name: "book" },
    { color: "green", name: "book" },
    { color: "green", name: "phone" },
    { color: "blue", name: "tv" },
    { color: "red", name: "headphone" },
    { color: "red", name: "mixer" },
    { color: "green", name: "mixer" },
    { color: "red", name: "ps4" },
    { color: "blue", name: "phone" },
    { color: "green", name: "ps4" },
    { color: "red", name: "mouse" },
    { color: "blue", name: "cd" }
    ]
let count = 0;
let user1Array = [];
let user2Array = [];
let user3Array = [];
for (product of shoppingCart) {
    if (count % 3 === 0) {
        user1Array.push(product.name);
    } else if (count % 3 === 1) {
        user2Array.push(product.name);
    } else if (count % 3 === 2) {
        user3Array.push(product.name);
    }
    count ++;
}


function createList(userArray,ulId){
    let ul = document.createElement("ul");
    ul.setAttribute("id", ulId);
    for (element of userArray) {
        let li = document.createElement("li");
        li.textContent = element;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);   
}

createList(user1Array,"user1");
createList(user2Array,"user2");
createList(user3Array,"user3");

