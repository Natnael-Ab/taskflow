/*
TaskFlow Storage Layer

Responsible only for saving and loading data.

The application state should not directly
communicate with browser storage.
*/


const STORAGE_KEY =
"taskflow_tasks";





/*
Save tasks into browser storage

Receives task array
and converts it into JSON.
*/

export function saveTasks(tasks){


    try {


        const serializedTasks =
        JSON.stringify(tasks);


        localStorage.setItem(
            STORAGE_KEY,
            serializedTasks
        );


    }
    catch(error){


        console.error(
            "Unable to save tasks:",
            error
        );


    }


}





/*
Load tasks from browser storage

Returns saved tasks.

If no data exists,
returns empty array.
*/

export function loadTasks(){


    try {


        const savedTasks =
        localStorage.getItem(
            STORAGE_KEY
        );


        if(!savedTasks){


            return [];


        }



        const tasks =
        JSON.parse(savedTasks);



        if(Array.isArray(tasks)){


            return tasks;


        }



        return [];


    }
    catch(error){


        console.error(
            "Unable to load tasks:",
            error
        );


        return [];


    }


}





/*
Remove all saved tasks

Used by clear data features.
*/

export function clearStorage(){


    try {


        localStorage.removeItem(
            STORAGE_KEY
        );


    }
    catch(error){


        console.error(
            "Unable to clear storage:",
            error
        );


    }


}





/*
Check whether stored data exists
*/

export function hasStoredTasks(){


    return (
        localStorage.getItem(
            STORAGE_KEY
        ) !== null
    );


}