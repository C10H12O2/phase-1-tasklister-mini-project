document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskInput = event.target['new-task-description'];
    buildToDo(taskInput);

    event.target.reset();
  });