const addBtn = document.getElementById('btn');
const list = document.getElementById('list');
const taskInput = document.getElementById('taskInput');

function createTask() {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    list.appendChild(li);
    taskInput.value = '';
};

function checkTask(evt) {
    li = evt.target;
    li.classList.toggle('crossed');
}

addBtn.addEventListener('click', createTask);

list.addEventListener('click', checkTask);

taskInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        createTask();
    }
});

