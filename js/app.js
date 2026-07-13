"use strict";


import { initializeState } from "./state.js";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeState();

        console.log("TaskFlow Application Started");

    }
);