document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = document.getElementById('new-task-description').value;
  const task = document.createElement('li');
  task.textContent = taskDescription;
  taskList.appendChild(task);
  document.getElementById('new-task-description').value = '';
});   