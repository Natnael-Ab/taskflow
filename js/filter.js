/*
TaskFlow Filtering Engine

This module handles:

Search logic

Task status filtering

Combining multiple filters

It does not modify data.

It only returns matching tasks.
*/



/*
Main filtering function

Receives:

tasks
search text
current filter

Returns:

filtered task array
*/

export function filterTasks(
    tasks,
    searchText = "",
    filter = "all"
){


    let filteredTasks =
    [...tasks];



    /*
    Search filtering

    Searches:

    Task title

    Task description

    Category

    */

    if(searchText){


        const keyword =
        searchText
        .toLowerCase();



        filteredTasks =
        filteredTasks.filter(
            task => {


                const title =
                task.title
                .toLowerCase();



                const description =
                task.description
                .toLowerCase();



                const category =
                task.category
                .toLowerCase();



                return (

                    title.includes(keyword)

                    ||

                    description.includes(keyword)

                    ||

                    category.includes(keyword)

                );


            }
        );


    }



    /*
    Status filtering

    all

    active

    completed

    */

    if(filter === "active"){


        filteredTasks =
        filteredTasks.filter(
            task =>
            !task.completed
        );


    }



    if(filter === "completed"){


        filteredTasks =
        filteredTasks.filter(
            task =>
            task.completed
        );


    }



    return filteredTasks;


}





/*
Sort tasks alphabetically

Future feature support.

Example:

A before B
*/

export function sortTasksAlphabetically(
    tasks
){


    return [...tasks]
    .sort(
        (first, second)=>{


            return first.title
            .localeCompare(
                second.title
            );


        }
    );


}