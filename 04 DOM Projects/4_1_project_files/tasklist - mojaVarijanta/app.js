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