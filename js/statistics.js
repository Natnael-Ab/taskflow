/*
TaskFlow Statistics Engine

This module calculates application analytics.

It does not manipulate HTML.

It only receives tasks
and returns calculated information.
*/



/*
Calculate basic task statistics

Returns:

total

completed

active

progress

*/

export function calculateStatistics(tasks){


    const total =
    tasks.length;



    const completed =
    tasks.filter(
        task =>
        task.completed
    ).length;



    const active =
    total - completed;



    const progress =
    total === 0
    ? 0
    : Math.round(
        (completed / total) * 100
    );



    return {


        total,


        completed,


        active,


        progress


    };


}





/*
Calculate priority distribution

Example result:

{
 High:2,
 Medium:4,
 Low:1
}

*/

export function calculatePriorityStats(tasks){



    const priorities = {


        High:0,


        Medium:0,


        Low:0


    };



    tasks.forEach(
        task => {


            if(
                priorities[task.priority]
                !== undefined
            ){


                priorities[task.priority]++;


            }


        }
    );



    return priorities;


}





/*
Calculate category distribution

Example:

{
 Study:5,
 Work:2
}

*/

export function calculateCategoryStats(tasks){



    const categories = {};



    tasks.forEach(
        task => {


            const category =
            task.category;



            if(
                categories[category]
            ){


                categories[category]++;


            }
            else{


                categories[category]=1;


            }


        }
    );



    return categories;


}





/*
Calculate completed tasks percentage

Separate helper
for future dashboard cards.
*/

export function completionRate(tasks){



    if(tasks.length===0){


        return 0;


    }



    const completed =
    tasks.filter(
        task =>
        task.completed
    ).length;



    return Math.round(
        (
            completed /
            tasks.length
        )
        *
        100
    );


}