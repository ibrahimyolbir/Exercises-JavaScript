// A single todo must have a title property, and the length should be at least 1 char in length.

// GET /todos - Returns all the todos

// POST /todos - Create a new todo. {title: string} needs to be provided as JSON

// GET /todos/:id - Returns a specific todo by id

// PUT /todos/:id - Update specific todo by id. {title: string} needs to be provided as JSON.

// DELETE /todos/:id - Delete a specific todo by id

function createToDo() {
    let value = { title: $("#createToDo").val() };
    document.querySelector("#createToDo").value = "";
    $.ajax({
        url: 'http://localhost:8091/todos',
        method: 'POST',
        data: JSON.stringify(value),
        contentType: 'application/json',
        success: function (data, status) {
            console.log("Succcess");
            getAllTodos();
        }
    });
}

function getAllTodos() {
    $.ajax({
        url: 'http://localhost:8091/todos',
        method: 'GET',
        success: function (data, status) {
            console.log("Succcess");
            console.log(data);
            showResults(data);
        }
    });

}

function showResults(data) {
    let element;
    document.querySelector("#todoList").textContent = "";
    for (let i = 0; i < data.data.length; i++) {
        element = data.data[i];
        let li = document.createElement("li");
        li.textContent = element.title;
        document.querySelector("#todoList").appendChild(li);
        console.log(element);
        let button = document.createElement("button");
        button.setAttribute("onClick", "deleteItem(this)");
        button.setAttribute("id", element.id);
        button.textContent = "Delete"
        li.appendChild(button);
    }

}

function deleteItem(currentElement) {
    // currentElement.parentNode.parentNode.removeChild(currentElement.parentNode);
    $.ajax({
        url: 'http://localhost:8091/todos/' + currentElement.id,
        method: 'DELETE',        
        success: function ( status) {
            console.log("Succcess");
            getAllTodos();
        }
    });
}





