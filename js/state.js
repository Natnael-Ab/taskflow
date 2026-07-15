/*
TaskFlow State Management

This file stores the current application data.

The state is the single source of truth.
All other modules communicate with this state.
*/


let tasks = [];



/*
Initialize application state

Receives saved tasks
from local storage.
*/

export function initializeState(savedTasks = []) {


    if(Array.isArray(savedTasks)){


        tasks = savedTasks;


    }
    else{


        tasks = [];


    }


}



/*
Return all tasks

Other modules use this
to read application data.
*/

export function getTasks(){


    return tasks;


}



/*
Replace complete task collection

Used when updating
multiple tasks.
*/

export function setTasks(updatedTasks){


    if(Array.isArray(updatedTasks)){


        tasks = updatedTasks;


    }


}



/*
Add new task into state
*/

export function addTaskToState(task){


    tasks.push(task);


}



/*
Remove task from state
*/

export function removeTaskFromState(id){


    tasks = tasks.filter(
        task =>
        task.id !== id
    );


}



/*
Find task by id

Returns one task object.
*/

export function findTaskById(id){


    return tasks.find(
        task =>
        task.id === id
    );


}



/*
Clear all tasks

Used for delete all feature.
*/

export function clearTasks(){


    tasks = [];


}