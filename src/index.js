//import "./styleIndex.css";
import { projects } from "./project.js";
import { dewDate } from "./date.js";
import { todo } from "./todo.js";
let projectList = [];
function createProject(projects) {
  projectList.push(projects);
}
//writting dom
const body=document.getElementsByName("body");
//header
const header=document.createElement("div");
header.setAttribute("id","header");
header.innerHTML="Your Handy To-Do list!";
body.appendChild(header)

//projectList tab
const 