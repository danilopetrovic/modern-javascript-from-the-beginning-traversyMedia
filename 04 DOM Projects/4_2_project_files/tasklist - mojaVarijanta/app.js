// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
(function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
})();

// Add Task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Add a task');
        return;
    }
    // Create li element
    const li = `<li class="collection-item">${taskInput.value} <a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`;
    console.log(li);
    // Append li to ul
    taskList.insertAdjacentHTML('beforeend', li);
    // Clear input
    taskInput.value = '';
}

// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}
// Clear Tasks
function clearTasks() {
    if (confirm("Are you sure you wan\'t to delete all tasks?")) {
        taskList.replaceChildren();
    }
}

// Filter Tasks
function filterTasks(e) {
    var text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        task.style.display = 'block';
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}