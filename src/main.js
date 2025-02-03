// Access font size of root through
// getComputedStyle return object.
// Set it as css variable which will allow
// computations on REM and PX using calc()
const root = document.documentElement

const body = document.querySelector("body");
const defaultFontSize = window.getComputedStyle(body).fontSize;

body.style.setProperty('--browser-font-size', defaultFontSize);