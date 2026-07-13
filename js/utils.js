"use strict";


export function generateId(){

    return Date.now();

}



export function cleanText(text){

    return text.trim();

}



export function isEmpty(value){

    return value.trim()==="";

}