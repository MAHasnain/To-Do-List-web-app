var taskList = document.getElementById('task-list');
var inputTask = document.getElementById("inputTask");

function addTask() {
    var newTask = document.createElement('li');
    taskList.appendChild(newTask)
    newTask.textContent = inputTask.value;
    inputTask.value = "";
}

function deleteTask(newTask) {
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function () {
        newTask.remove();
    }
}