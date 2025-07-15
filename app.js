// function addTask() {
//     var newTask = document.createElement('li');
//     taskList.appendChild(newTask)
//     newTask.textContent = inputTask.value;
//     inputTask.value = "";
//     var deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add('btn-danger');
//     newTask.appendChild(deleteBtn);
//     deleteBtn.onclick = function () {
//         newTask.remove();
//}

var taskList = document.getElementById('task-list');
var inputTask = document.getElementById("inputTask");

var todos = [];
var row = 0;

function addTask() {
    event.preventDefault();
    if (inputTask.value == "") alert("Please write at least 1 todo.");

    var todo = {
        id: Date.now(),
        row_id: row,
        todo: inputTask.value
    }
    todos[row] = todo;
    row = row + 1;
    // var newTask = document.createElement(`li`);
    console.log(todos);
    // var deleteBtn = document.createElement("button");
    // deleteBtn.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    // var editBtn = document.createElement("button");
    // editBtn.innerHTML = `<span class="material-symbols-outlined">edit</span>`;
    // editBtn.onclick = editTask(todo.row_id);

    // var editBtn = "<li>"+inputTask.value+"<button onclick='editTask(" + todo.row_id + ")'><span class='material-symbols-outlined'>edit</span></button></li>";
    // newTask.innerHTML = newTask.innerHTML + (editBtn);
    inputTask.value = "";
    taskList.innerHTML = "";
    // for (let i = 0; i < todos.length; i++) {
    // console.log(todos[i], i);
    // newTask.textContent = todos[i].todo
    // newTask.id = todos[i].row_id;
    todos.forEach(element => {
        var editBtn = "<li id='li_" + element.row_id + "'><label>" + element.todo + "</label>" +
            "<button onclick='editTask(" + element.row_id + ")'><span class='material-symbols-outlined'>edit</span></button>" +
            "<button onclick='deleteTask(" + element.row_id + ")'><span class='material-symbols-outlined'>delete</span></button></li>";
        taskList.innerHTML = taskList.innerHTML + editBtn;
    });

    // }
    // newTask.appendChild(deleteBtn);
    // deleteBtn.onclick = deleteTask()
}

function updateTask(btn) {
    let id = btn.attributes['data_id'].value;
    document.getElementById('li_' + id).children[0].textContent = inputTask.value;
    document.getElementById('btn_update').classList.add('hidden');
    document.getElementById('btn_add').classList.remove('hidden');
    inputTask.value = "";
}

function deleteTask(todo) {
    var newtodos = [];

    todos.forEach(newtodo => {
        if (newtodo.row_id == todo) {
            return;
        }
        newtodos[newtodo.row_id] = newtodo;
    });
    todos = newtodos;
    document.getElementById('li_' + todo).remove();
}

function editTask(row) {
    inputTask.value = todos[row].todo;
    document.getElementById('btn_add').classList.add('hidden');
    document.getElementById('btn_update').classList.remove('hidden');
    document.getElementById('btn_update').attributes['data_id'].value = row;
}