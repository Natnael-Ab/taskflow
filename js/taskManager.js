"use strict";


import { getTasks, setTasks } 
from "./state.js";



export function createTask(task){


    const tasks = getTasks();


    tasks.push(task);


    setTasks(tasks);


}