/*
TaskFlow Theme System

Responsible for:

Theme switching

Theme persistence

Applying visual mode

It does not control UI components.
*/


const THEME_KEY =
"taskflow_theme";



const DEFAULT_THEME =
"light";





/*
Apply theme to document

Adds theme attribute
to HTML element.

*/

export function applyTheme(theme){



    document.documentElement
    .setAttribute(
        "data-theme",
        theme
    );



}





/*
Get current saved theme

Returns:

dark

or

light

*/

export function getTheme(){



    const savedTheme =
    localStorage.getItem(
        THEME_KEY
    );



    return savedTheme ||
    DEFAULT_THEME;


}





/*
Save theme preference

*/

function saveTheme(theme){



    localStorage.setItem(
        THEME_KEY,
        theme
    );


}





/*
Switch between themes

light → dark

dark → light

*/

export function toggleTheme(){



    const currentTheme =
    getTheme();



    const newTheme =
    currentTheme === "dark"
    ? "light"
    : "dark";



    applyTheme(
        newTheme
    );



    saveTheme(
        newTheme
    );



    return newTheme;


}