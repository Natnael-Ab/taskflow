/*
TaskFlow Task Manager

Responsible for all task operations.

This file contains application business logic.

It does not handle UI.
It does not manipulate HTML.
*/


import {

    getTasks,

    addTaskToState,

    removeTaskFromState,

    findTaskById,

    setTasks

}

from "./state.js";



import {

    saveTasks

}

from "./storage.js";





/*
Generate unique task ID

Uses current timestamp
to reduce duplicate IDs.
*/

function generateId(){


    return Date.now();


}





/*
Create new task

Receives task information
from the application form.
*/

export function createTask(taskData){



    const newTask = {


        id:
        generateId(),


        title:
        taskData.title,


        description:
        taskData.description || "",


        category:
        taskData.category || "Personal",


        priority:
        taskData.priority || "Low",


        dueDate:
        taskData.dueDate || "",


        completed:false,


        createdAt:
        new Date().toISOString()


    };



    addTaskToState(
        newTask
    );



    saveTasks(
        getTasks()
    );



    return newTask;


}





/*
Update existing task

Finds task by ID
and replaces editable values.
*/

export function updateTask(
    id,
    updatedData
){



    const task =
    findTaskById(id);



    if(!task){

        return null;

    }



    task.title =
    updatedData.title;



    task.description =
    updatedData.description;



    task.category =
    updatedData.category;



    task.priority =
    updatedData.priority;



    task.dueDate =
    updatedData.dueDate;



    saveTasks(
        getTasks()
    );



    return task;


}





/*
Delete task

Removes task completely.
*/

export function deleteTask(id){



    removeTaskFromState(
        id
    );



    saveTasks(
        getTasks()
    );


}





/*
Toggle task completion

Changes:

false → true

true → false

*/

export function toggleTask(id){



    const task =
    findTaskById(id);



    if(!task){

        return null;

    }



    task.completed =
    !task.completed;



    saveTasks(
        getTasks()
    );



    return task;


}





/*
Delete all tasks

Used by future feature:

Delete All button.
*/

export function deleteAllTasks(){



    setTasks([]);



    saveTasks(
        []
    );


}