import { todo } from "./todo.js";
//function projects that creates projects object that stores name and todos

function projects(name) {
  let project = {
    name,
    todoList: [],
  };
  //function to add a todo to projects
  function addToDO(todoObject) {
    project.todoList.push(todoObject);
  }
  //function to delete a todo
  function deleteToDO(todoObject) {
    for (let i = 0; i < todoList.length; i++) {
      let temp = todoList[i];
      if (todoObject.name == temp.name) {
        todoObject.splice(i, 1);
      }
    }
  }
  return {
    project,
    addToDO,
    deleteToDO,
  };
}
export { projects };
