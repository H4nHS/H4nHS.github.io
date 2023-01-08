const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todos = [];

function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    li.appendChild(span);
    const doneBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");
    doneBtn.innerText = "✔";
    deleteBtn.innerText = "❌";
    // updateBtn.innerText = "✏";
    li.appendChild(doneBtn);
    doneBtn.addEventListener("click", doneTodo);
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeTodo);
    // li.appendChild(updateBtn);
    // updateBtn.addEventListener("click", updateTodo);
    span.innerText = newTodo.text;
    todoList.appendChild(li);
}

function removeTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

// function updateTodo(e) {
//     const child = e.target.parentElement;
//     const li = e.target.parentElement.querySelector("span");
//     const todo = li.innerText;
//     const input = document.createElement("input");
//     input.placeholder = todo;
//     li.remove();

//     child.insertBefore(input, child.firstChild);
//     console.log(li, todo, input, child);
// }

function doneTodo(e) {
    const button = e.target;
    const p = e.target.parentElement;

    if (button.innerText === "💡") {
        p.style.textDecoration = "none";
        button.innerText = "✔";
    } else {
        p.style.textDecoration = "line-through";
        button.innerText = "💡";
    }
}

function todoSubmitHandler(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    addTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmitHandler);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(addTodo);
}
