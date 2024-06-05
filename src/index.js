//import "./styleIndex.css";
import { dewDate } from "./date.js";
import { todo } from "./todo.js";
let todo1 = todo("title", "desc", "date", "prio");
//create function that creates projects object having name and todos
function projects(name) {
  let todos = [];
  function addTodo(todo) {
    todos.push(todo);
  }
  return {
    addTodo,
    name,
    todos,
  };
}
let projectDefault = projects("Default", todo1);
projectDefault.addTodo(todo("ti", "kk", "ll", "mm"));
console.log(projectDefault);
console.log(dewDate("choose from calendar"));
