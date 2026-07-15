"use strict";

/*
TaskFlow Application Entry Point

This file connects all application modules.

Responsibilities:

Initialize application

Connect events

Coordinate modules

It does not contain business logic.
*/


import {
    initializeState,
    getTasks
}
from "./state.js";


import {
    loadTasks
}
from "./storage.js";


import {
    createTask,
    updateTask,
    deleteTask,
    toggleTask
}
from "./taskManager.js";


import {
    refreshApplication,
    setCurrentFilter,
    setCurrentSearch
}
from "./controller.js";


import {
    cleanText,
    isEmpty
}
from "./utils.js";


import {
    applyTheme,
    getTheme,
    toggleTheme
}
from "./theme.js";



let editingTaskId = null;



/*
Start application

Runs after HTML loads.
*/

document.addEventListener(
"DOMContentLoaded",
()=>{


    initializeApplication();


});





function initializeApplication(){


    /*
    Load saved theme
    */

    applyTheme(
        getTheme()
    );



    /*
    Load saved tasks

    from Local Storage

    */

    initializeState(
        loadTasks()
    );



    /*
    Initial render

    */

    refreshApplication();



    connectTaskForm();


    connectSearch();


    connectFilters();


    connectTaskActions();


    connectThemeButton();



}







/*
Task creation and editing form

*/

function connectTaskForm(){


    const form =
    document.getElementById(
        "taskForm"
    );


    form.addEventListener(
    "submit",
    event=>{


        event.preventDefault();



        const title =
        cleanText(
            document.getElementById(
                "taskTitle"
            ).value
        );



        if(
            isEmpty(title)
        ){


            alert(
                "Task title is required"
            );


            return;


        }



        const taskData = {


            title,


            description:
            document.getElementById(
                "taskDescription"
            ).value.trim(),



            category:
            document.getElementById(
                "taskCategory"
            ).value,



            priority:
            document.getElementById(
                "taskPriority"
            ).value,



            dueDate:
            document.getElementById(
                "taskDate"
            ).value


        };



        if(editingTaskId){


            updateTask(
                editingTaskId,
                taskData
            );


            editingTaskId = null;


        }
        else{


            createTask(
                taskData
            );


        }



        refreshApplication();


        form.reset();



    });


}







/*
Search functionality

*/

function connectSearch(){


    const searchInput =
    document.getElementById(
        "searchInput"
    );


    searchInput.addEventListener(
    "input",
    event=>{


        setCurrentSearch(
            event.target.value
        );


        refreshApplication();


    });


}







/*
Filter buttons

*/

function connectFilters(){


    const buttons =
    document.querySelectorAll(
        ".filter-btn"
    );



    buttons.forEach(
    button=>{


        button.addEventListener(
        "click",
        ()=>{


            document
            .querySelectorAll(
                ".filter-btn"
            )
            .forEach(
            item=>{


                item.classList.remove(
                    "active"
                );


            });



            button.classList.add(
                "active"
            );



            setCurrentFilter(
                button.dataset.filter
            );



            refreshApplication();


        });


    });


}







/*
Task card actions

Uses event delegation.

*/

function connectTaskActions(){


    const taskList =
    document.getElementById(
        "taskList"
    );


    taskList.addEventListener(
    "click",
    event=>{


        const card =
        event.target.closest(
            ".task-card"
        );


        if(!card){

            return;

        }



        const id =
        Number(
            card.dataset.id
        );



        const action =
        event.target.dataset.action;




        if(action==="complete"){


            toggleTask(id);


            refreshApplication();


        }



        if(action==="delete"){



            const confirmDelete =
            confirm(
                "Delete this task?"
            );



            if(confirmDelete){


                deleteTask(id);


                refreshApplication();


            }


        }




        if(action==="edit"){


            loadTaskToForm(id);


        }



    });


}







/*
Load selected task into form

*/

function loadTaskToForm(id){



    const task =
    getTasks()
    .find(
        item =>
        item.id === id
    );



    if(!task){

        return;

    }



    editingTaskId=id;



    document.getElementById(
        "taskTitle"
    ).value =
    task.title;



    document.getElementById(
        "taskDescription"
    ).value =
    task.description;



    document.getElementById(
        "taskCategory"
    ).value =
    task.category;



    document.getElementById(
        "taskPriority"
    ).value =
    task.priority;



    document.getElementById(
        "taskDate"
    ).value =
    task.dueDate;



}







/*
Theme button

*/

function connectThemeButton(){


    const button =
    document.querySelector(
        ".theme-btn"
    );



    button.addEventListener(
    "click",
    ()=>{


        const theme =
        toggleTheme();



        button.textContent =
        theme === "dark"
        ? "☀️"
        : "🌙";



    });



}