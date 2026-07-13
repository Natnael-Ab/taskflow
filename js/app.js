"use strict";


import {
initializeState,
getTasks
}
from "./state.js";



import {
createTask,
updateTask,
deleteTask
}
from "./taskManager.js";



import {
renderTasks
}
from "./ui.js";



import {
cleanText,
isEmpty
}
from "./utils.js";



let editingTaskId=null;




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
event=>{


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



const data={


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

};





if(editingTaskId){


updateTask(
editingTaskId,
data
);


editingTaskId=null;


}
else{


createTask(data);


}



renderTasks(
getTasks()
);



form.reset();


});







document
.getElementById(
"taskList"
)
.addEventListener(
"click",
event=>{


const action =
event.target.dataset.action;



const card =
event.target.closest(
".task-card"
);



if(!card){

return;

}



const id =
Number(
card.dataset.id
);





if(action==="edit"){


editingTaskId=id;



const task =
getTasks()
.find(
task=>task.id===id
);



document.getElementById(
"taskTitle"
).value =
task.title;



document.getElementById(
"taskDescription"
).value =
task.description;



document.getElementById(
"taskCategory"
).value =
task.category;



document.getElementById(
"taskPriority"
).value =
task.priority;



document.getElementById(
"taskDate"
).value =
task.dueDate;



}







if(action==="delete"){



const confirmed =
confirm(
"Delete this task?"
);



if(confirmed){


deleteTask(id);



renderTasks(
getTasks()
);


}


}



});


});