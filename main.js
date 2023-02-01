import checkComplete from "./COMPONET/checkComplete.js";
import deleteIcon from "./COMPONET/deleteIcon.js";

const btn = document.getElementById("form-btn");
const createTask = (evento) =>{
    evento.preventDefault();
    const imput = document.querySelector("#form-imput");
    const value = imput.value;
    const list = document.getElementById("list");
    const task = document.createElement("li");
    task.classList.add("card")
    imput.value = "";
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    


    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    };
    




btn.addEventListener("click",createTask);














