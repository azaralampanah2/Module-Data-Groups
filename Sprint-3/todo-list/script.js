const toDoInput = document.getElementById("inputToDo");
const addToDoBtn = document.getElementById("addToDo");
const container = document.getElementById("todo-list");
const removeAll = document.getElementById("remove-all-completed");
addToDoBtn.addEventListener("click", () => {
  addNewTodo(event);
});
let todos = [];

// Function to populate the todo list
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear the list to avoid duplications

  todos.forEach((todo, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = todo.task;
    list.appendChild(listItem);

    // Create 'Complete' button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "complete";
    listItem.appendChild(completeBtn);
    completeBtn.addEventListener("click", () => {
      todos[index].complete = true;
      populateTodoList(todos);
    });
    if (todo.complete) {
      listItem.style.textDecoration = "line-through";
    }
    // Create 'Delete' button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1); // Remove the todo from the array
      populateTodoList(todos); // Refresh the list
    });

    // Apply completed style if the todo is already marked as complete
  });
}

// Function to add a new todo
function addNewTodo(event) {
  event.preventDefault(); // Prevent the page from refreshing

  const toDoInput = document.getElementById("todo-input");
  const textValue = toDoInput.value.trim();
  if (textValue) {
    todos.push({ task: textValue, complete: false });
    populateTodoList(todos);
    toDoInput.value = ""; // Clear the input field
  }
}

removeAll.addEventListener("click", () => {
  deleteAllCompletedTodos(todos);
});

// Event listener for the Add button
//document.getElementById("add-todo").addEventListener("click", addNewTodo);

// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  event.preventDefault();
  const textValue = toDoInput.value;

  if (textValue) {
    todos.push({ task: textValue, complete: false });

    populateTodoList(todos);

    toDoInput.value = "";
  }

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(todos) {
  todos.forEach((todo, index) => {
    if (todo.complete == true) {
      todos.splice(index, 1);
      populateTodoList(todos);
    }
  });
}
