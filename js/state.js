"use strict";


let state = {

    tasks: []

};



export function initializeState(){

    state.tasks = [];

}



export function getTasks(){

    return state.tasks;

}



export function setTasks(tasks){

    state.tasks = tasks;

}