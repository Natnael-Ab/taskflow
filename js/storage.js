"use strict";


const STORAGE_KEY = "taskflow_tasks";



export function saveTasks(tasks){


    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(tasks)

    );


}





export function loadTasks(){


    const data =
        localStorage.getItem(
            STORAGE_KEY
        );



    if(!data){

        return [];

    }



    return JSON.parse(data);


}





export function clearStorage(){


    localStorage.removeItem(
        STORAGE_KEY
    );


}