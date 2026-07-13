"use strict";


import {
    initializeState,
    getTasks
} from "./state.js";


import {
    createTask
} from "./taskManager.js";


import {
    renderTasks
} from "./ui.js";


import {
    cleanText,
    isEmpty
} from "./utils.js";



document.addEventListener(
"DOMContentLoaded",
()=>{


initializeState();



const form =
document.getElementById(
"taskForm"
);



form.addEventListener(
"submit",
(event)=>{


event.preventDefault();



const title =
cleanText(
document.getElementById(
"taskTitle"
).value
);



if(isEmpty(title)){

alert(
"Task title is required"
);

return;

}



const task = createTask({

title:title,

description:
document.getElementById(
"taskDescription"
).value,

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

});



renderTasks(
getTasks()
);



form.reset();



console.log(
"Created:",
task
);


});


});