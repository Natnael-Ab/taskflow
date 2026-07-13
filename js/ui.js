"use strict";


function createElement(tag,className){

    const element =
        document.createElement(tag);


    element.className=className;


    return element;

}





function createTaskElement(task){


    const item =
        createElement(
            "li",
            "task-card"
        );



    item.dataset.id =
        task.id;



    if(task.completed){

        item.classList.add(
            "completed"
        );

    }



    const header =
        createElement(
            "div",
            "task-header"
        );



    const checkbox =
        createElement(
            "input",
            "task-checkbox"
        );


    checkbox.type="checkbox";


    checkbox.checked =
        task.completed;


    checkbox.dataset.action =
        "complete";





    const title =
        createElement(
            "h3",
            "task-title"
        );


    title.textContent =
        task.title;



    const priority =
        createElement(
            "span",
            "priority-badge"
        );


    priority.textContent =
        task.priority;



    header.append(
        checkbox,
        title,
        priority
    );



    const description =
        createElement(
            "p",
            "task-description"
        );


    description.textContent =
        task.description ||
        "No description";



    const meta =
        createElement(
            "div",
            "task-meta"
        );


    meta.innerHTML=`

    <span>
    ${task.category}
    </span>

    <span>
    ${task.dueDate || "No date"}
    </span>

    `;



    const actions =
        createElement(
            "div",
            "task-actions"
        );



    const editButton =
        createElement(
            "button",
            "secondary-btn"
        );


    editButton.textContent="Edit";


    editButton.dataset.action="edit";



    const deleteButton =
        createElement(
            "button",
            "danger-btn"
        );


    deleteButton.textContent="Delete";


    deleteButton.dataset.action="delete";



    actions.append(
        editButton,
        deleteButton
    );



    item.append(
        header,
        description,
        meta,
        actions
    );



    return item;

}





export function renderTasks(tasks){


    const taskList =
        document.getElementById(
            "taskList"
        );



    taskList.innerHTML="";



    tasks.forEach(task=>{


        taskList.appendChild(
            createTaskElement(task)
        );


    });


}