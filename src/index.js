document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const inputField = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")

  function myTodos(event) {
    let newTask = document.createElement("li")
    newTask.innerHTML = `${inputField.value} <button class='delete'>x</button>`
    taskList.appendChild(newTask)
    event.preventDefault()
    inputField.value = ''

    document.querySelector(".delete").addEventListener("click", function(e) {
      newTask.remove()
    })
  }

  form.addEventListener("submit", myTodos)  

  
});
