// Variables

const container = document.getElementById('container');
const inputTask = document.getElementById('input-task');
const addTaskBtn = document.getElementById('add-task');


addTaskBtn.addEventListener('click', function() {

    let task = document.createElement('div');
    task.classList.add('task-items-container');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-close"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value === '')
    alert('You should write task first.')

    else
    container.appendChild(task);

    inputTask.value = '';

    li.addEventListener('click', function() {
        li.classList.toggle('checked')
    })

    deleteBtn.addEventListener('click', function(e) {
        e.target.parentElement.parentElement.remove();
    })
});
