"use strict";


let state = {

    tasks: []

};




export function initializeState(tasks=[]){


    state.tasks = tasks;


}




export function getTasks(){


    return state.tasks;


}





export function setTasks(tasks){


    state.tasks = tasks;


}