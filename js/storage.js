"use strict";


const STORAGE_KEY = "taskflow_tasks";



export function saveTasks(tasks){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(tasks)

    );

}



export function loadTasks(){

    const savedTasks =
        localStorage.getItem(STORAGE_KEY);


    if(!savedTasks){

        return [];

    }


    return JSON.parse(savedTasks);

}