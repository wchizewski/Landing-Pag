// Landing Page by Will C

// Prompt user for Data
let name = prompt("What is your name?");
let focus = prompt("What is your main focus for today?");

// Output Data into the Page
document.getElementById("nameSpan").innerHTML = name;
document.getElementById("focusP").innerHTML = focus;