/*
TaskFlow UI Rendering Engine

This file controls visual updates.

It receives data and creates
the required interface.

It does not manage application logic.
*/



/*
Render all visible tasks

Receives already filtered tasks
from the controller.
*/

export function renderTasks(tasks){


    const taskList =
    document.getElementById(
        "taskList"
    );


    if(!taskList){

        return;

    }


    taskList.innerHTML = "";



    tasks.forEach(
        task => {


            const card =
            createTaskCard(task);


            taskList.appendChild(
                card
            );


        }
    );


}





/*
Create one task card

Converts task object
into HTML element.
*/

function createTaskCard(task){


    const li =
    document.createElement(
        "li"
    );


    li.className =
    "task-card";



    if(task.completed){


        li.classList.add(
            "completed"
        );


    }



    li.dataset.id =
    task.id;



    li.innerHTML = `

        <div class="task-header">

            <h3 class="task-title">
                ${escapeHTML(task.title)}
            </h3>


            <span class="priority-badge">
                ${escapeHTML(task.priority)}
            </span>

        </div>


        <p class="task-description">

            ${escapeHTML(task.description)}

        </p>



        <div class="task-meta">

            <span>
                ${escapeHTML(task.category)}
            </span>


            <span>
                ${task.dueDate || "No date"}
            </span>


        </div>



        <div class="task-actions">


            <button
            class="secondary-btn"
            data-action="complete"
            type="button">

                ${task.completed
                ? "Undo"
                : "Complete"}

            </button>



            <button
            class="secondary-btn"
            data-action="edit"
            type="button">

                Edit

            </button>



            <button
            class="danger-btn"
            data-action="delete"
            type="button">

                Delete

            </button>


        </div>

    `;



    return li;


}





/*
Update statistics section

Shows:

Total tasks

Active tasks

Completed tasks

Progress percentage

*/

export function updateStatistics(tasks){



    const total =
    tasks.length;



    const completed =
    tasks.filter(
        task =>
        task.completed
    ).length;



    const active =
    total - completed;



    const progress =
    total === 0
    ? 0
    : Math.round(
        (completed / total) * 100
    );



    const totalElement =
    document.getElementById(
        "totalTasks"
    );



    const activeElement =
    document.getElementById(
        "activeTasks"
    );



    const completedElement =
    document.getElementById(
        "completedTasks"
    );



    const progressElement =
    document.getElementById(
        "progressValue"
    );



    if(totalElement){

        totalElement.textContent =
        total;

    }



    if(activeElement){

        activeElement.textContent =
        active;

    }



    if(completedElement){

        completedElement.textContent =
        completed;

    }



    if(progressElement){

        progressElement.textContent =
        `${progress}%`;

    }


}





/*
Control empty state visibility

When there are no visible tasks,
show message.

*/

export function updateEmptyState(tasks){



    const emptyState =
    document.querySelector(
        ".empty-state"
    );



    if(!emptyState){

        return;

    }



    if(tasks.length === 0){


        emptyState.style.display =
        "block";


    }
    else{


        emptyState.style.display =
        "none";


    }


}





/*
Security helper

Prevents HTML injection.

Example:

User enters:

<script>alert()</script>

It will display as text,
not execute code.
*/

function escapeHTML(value){


    if(!value){

        return "";

    }



    return value

    .replaceAll(
        "&",
        "&amp;"
    )

    .replaceAll(
        "<",
        "&lt;"
    )

    .replaceAll(
        ">",
        "&gt;"
    )

    .replaceAll(
        '"',
        "&quot;"
    )

    .replaceAll(
        "'",
        "&#039;"
    );


}