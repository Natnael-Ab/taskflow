"use strict";


import {
getTasks,
setTasks
}
from "./state.js";


import {
saveTasks
}
from "./storage.js";


import {
generateId
}
from "./utils.js";



export function createTask(data){


const tasks=getTasks();



const newTask={

id:generateId(),

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


saveTasks(tasks);



return newTask;


}





export function updateTask(id,data){


const tasks=getTasks();



const task =
tasks.find(
task=>task.id===id
);



if(!task){

return null;

}



Object.assign(
task,
data
);



task.updatedAt =
new Date().toISOString();



setTasks(tasks);


saveTasks(tasks);



return task;


}





export function deleteTask(id){


const tasks=getTasks();



const updatedTasks =
tasks.filter(
task=>task.id!==id
);



setTasks(updatedTasks);


saveTasks(updatedTasks);



}





export function toggleTask(id){


const tasks=getTasks();



const task =
tasks.find(
task=>task.id===id
);



if(!task){

return null;

}



task.completed =
!task.completed;



task.updatedAt =
new Date().toISOString();



setTasks(tasks);


saveTasks(tasks);



return task;


}