const toDoInput = document.getElementById("inputToDo");
const addToDoBtn = document.getElementById("addToDo");
const container = document.getElementById("todo-list");

// Event listener for button click
addToDoBtn.addEventListener("click", () => {
  addNewTodo(event);
});
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  const textValue = toDoInput.value; // Get and trim the input value

  // Create a new list item
  const listItem = document.createElement("li");
  const button1 = document.createElement("button");
  button1.innerText = "complete";
  // Set the text content of the list item
  listItem.innerText = textValue;

  // Append the list item to the list container
  container.appendChild(listItem);
  container.appendChild(button1);

  toDoInput.value = "";
  event.preventDefault();
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
