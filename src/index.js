document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value.trim();

    if (task !== '') {
      buildToDo(task, taskList);
      form.reset();
    }
  });
});

function buildToDo(task, taskList) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}