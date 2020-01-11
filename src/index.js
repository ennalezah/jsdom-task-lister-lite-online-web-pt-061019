document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const inputField = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")

  function addTodo(event) {
    let newTask = document.createElement("li")
    newTask.innerText = inputField.value
    taskList.appendChild(newTask)
    event.preventDefault()
    inputField.value = ''
  }

  form.addEventListener("submit", addTodo)

});
