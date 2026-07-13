"use strict";


export function renderTasks(tasks){


    const taskList =
        document.getElementById(
            "taskList"
        );


    taskList.innerHTML="";


    tasks.forEach(task=>{


        const item =
            document.createElement(
                "li"
            );


        item.textContent =
            task.title;


        taskList.appendChild(item);


    });


}