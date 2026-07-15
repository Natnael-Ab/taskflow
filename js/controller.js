/*
TaskFlow Controller Layer

The controller connects application data
with the user interface.

It decides what data should be displayed.
*/


import {

    getTasks

}

from "./state.js";



import {

    renderTasks,

    updateStatistics,

    updateEmptyState

}

from "./ui.js";



import {

    filterTasks

}

from "./filter.js";





/*
Current search value

Stores what user typed.
*/

let currentSearch = "";





/*
Current active filter

Possible values:

all
active
completed

*/

let currentFilter = "all";





/*
Update search value

Called when user types.
*/

export function setCurrentSearch(value){


    currentSearch =
    value.trim();


}





/*
Update current filter

Called when filter buttons change.
*/

export function setCurrentFilter(filter){


    currentFilter =
    filter;


}





/*
Return current filter

Useful for UI state.
*/

export function getCurrentFilter(){


    return currentFilter;


}





/*
Main application refresh function

This is the controller's
most important responsibility.

Flow:

Get tasks

↓

Filter tasks

↓

Render tasks

↓

Update statistics

*/

export function refreshApplication(){



    const tasks =
    getTasks();



    const visibleTasks =
    filterTasks(
        tasks,
        currentSearch,
        currentFilter
    );



    renderTasks(
        visibleTasks
    );



    updateStatistics(
        tasks
    );



    updateEmptyState(
        visibleTasks
    );


}