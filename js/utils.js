/*
TaskFlow Utility Functions

This module contains reusable helper functions.

Utilities should remain independent
from application logic.
*/





/*
Clean user text input.

Removes unnecessary spaces.

Example:

"  Learn JS  "

becomes:

"Learn JS"

*/

export function cleanText(value){



    if(typeof value !== "string"){


        return "";


    }



    return value.trim();


}





/*
Check whether a value is empty.

Used for validation.

*/

export function isEmpty(value){



    return (

        !value ||

        value.trim().length === 0

    );


}





/*
Generate unique identifiers.

Used when creating data records.

*/

export function generateId(){



    return Date.now();


}





/*
Format date values.

Converts:

2026-07-15

into:

15 Jul 2026

*/

export function formatDate(date){



    if(!date){


        return "No date";


    }



    const formattedDate =
    new Date(date);



    if(
        Number.isNaN(
            formattedDate.getTime()
        )
    ){


        return "Invalid date";


    }



    return formattedDate.toLocaleDateString(
        "en-US",
        {

            day:"numeric",

            month:"short",

            year:"numeric"

        }
    );


}





/*
Create delay function.

Useful for:

animations

search optimization

future API requests

*/

export function delay(milliseconds){



    return new Promise(
        resolve => {


            setTimeout(
                resolve,
                milliseconds
            );


        }
    );


}





/*
Prevent duplicate tasks.

Checks whether a title already exists.

*/

export function taskExists(
    tasks,
    title
){



    const cleanTitle =
    cleanText(title)
    .toLowerCase();



    return tasks.some(
        task =>


        task.title
        .toLowerCase()
        ===
        cleanTitle

    );


}





/*
Calculate percentage.

Reusable math helper.

*/

export function calculatePercentage(
    value,
    total
){



    if(total === 0){


        return 0;


    }



    return Math.round(
        (
            value /
            total
        )
        *
        100
    );


}