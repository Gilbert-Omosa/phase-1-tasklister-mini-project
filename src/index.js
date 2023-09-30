// Get the task form and task list elements from the DOM
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

// Event listener for the form submission
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values from the form
  const taskInput = document.getElementById('taskInput').value;
  const prioritySelect = document.getElementById('prioritySelect').value;
  const userInput = document.getElementById('userInput').value;
  const durationInput = document.getElementById('durationInput').value;
  const dueDateInput = document.getElementById('dueDateInput').value;

  // Check if the task input is empty, display an alert and return if it is
  if (taskInput === '') {
    alert('Please enter a task.');
    return;
  }

  // Create a new list item (task) and set its content and class based on priority
  const listItem = document.createElement('li');
  listItem.classList.add(prioritySelect);
  listItem.innerHTML = `
    <span>${taskInput} - Priority: ${prioritySelect}</span>
    <span>User: ${userInput}</span>
    <span>Duration: ${durationInput}</span>
    <span>Due Date: ${dueDateInput}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">Delete</button>
  `;