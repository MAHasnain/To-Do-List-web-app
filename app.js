// function addTask() {
//     var newTask = document.createElement('li');
//     taskList.appendChild(newTask)
//     newTask.textContent = inputTask.value;
//     inputTask.value = "";
// }


var taskList = document.getElementById('task-list');
var inputTask = document.getElementById("inputTask");

var todos = [];


function addTask() {
    event.preventDefault();
    if (inputTask.value == "") alert("Please write at least 1 todo.");
    var todo = {
        id: Date.now(),
        todo: inputTask.value
    }
    todos.push(todo);
    var newTask = document.createElement(`li`);
    for (let i = 0; i < todos.length; i++) {
        newTask.textContent = todos[i].todo
        taskList.appendChild(newTask);
    }
    inputTask.value = "";
    console.log(todos);
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = `<span class="material-symbols-outlined">delete</span>`;
function addTask() {
    var newTask = document.createElement('li');
    taskList.appendChild(newTask)
    newTask.textContent = inputTask.value;
    inputTask.value = "";
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('btn-danger');
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function () {
        newTask.remove();
    }
}

function deleteTask(newTask) {

}

// function edit() {

// }
    newTask.remove();
}
