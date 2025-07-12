var taskList = document.getElementById('task-list');
var inputTask = document.getElementById("inputTask");

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
    newTask.remove();
}