// Get the task form and task list elements from the DOM
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Event listener for the form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior
