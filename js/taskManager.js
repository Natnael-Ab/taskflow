"use strict";


import {
    getTasks,
    setTasks
} from "./state.js";


import {
    generateId
} from "./utils.js";



export function createTask(data){


    const tasks = getTasks();



    const newTask = {

        id: generateId(),

        title:data.title,

        description:data.description,

        category:data.category,

        priority:data.priority,

        dueDate:data.dueDate,

        completed:false,

        createdAt:new Date().toISOString(),

        updatedAt:new Date().toISOString()

    };



    tasks.push(newTask);



    setTasks(tasks);



    return newTask;

}





export function updateTask(id, updatedData){


    const tasks = getTasks();



    const task =
        tasks.find(
            task=>task.id===id
        );



    if(!task){

        return null;

    }



    Object.assign(
        task,
        updatedData
    );



    task.updatedAt =
        new Date().toISOString();



    setTasks(tasks);



    return task;

}





export function deleteTask(id){


    const tasks =
        getTasks();



    const updatedTasks =
        tasks.filter(
            task=>task.id!==id
        );



    setTasks(updatedTasks);



}