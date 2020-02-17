console.log("QUESTIONS.JS IS LINKED!")

// QUESTION(ARRAY) VARIABLE IS STORING ALL THE QUESTIONS(OBJECT), OPTIONS(OBJECT), AND ANSWERS(OBJECT)
var questions = [
    
    {
    question : "Commonly used data types DO NOT include?",
    
    options : [
        "strings",
        "booleans",
        "alerts", 
        "numbers"
    ],
    
    answer : 2
    
    },
    
    {
    
    question : "The condition in an if / else statement is enclosed within ____.?",
    
    options : [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets"
    ],
    
    answer : 2
    
    },
    
    {
    
    question : "Inside which HTML element do we put the JavaScript?",
    
    options : [
        "js",
        "javascript",
        "scripting",
        "script"
    ],
    
    answer : 3
    
    },
    
    {
    
    question : "Which event occurs when the user clicks on an HTML element?",
    
    options : [
        "onmouseclick",
        "onmouseover",
        "onchange",
        "onclick"
    ],
    
    answer : 3
    
    },
    
    {
    
    question : "How do you declare a Javascript variable?",
    
    options : [
        "variable carName",
        "var carName",
        "v carName",
        "const carname"
    ],
    
    answer : 1
    
    },
    
    {
    
    question : "How do you round the number 7.25, to the nearest integer?",
    
    options : [
        "Math.round(7.25)",
        "rnd(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)"
    ],
    
    answer : 0
    
    },
    
    {
    
    question : "What does CSS stand for?",
    
    options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets"
    ],
    
    answer : 3
    
    },
    
    {
    
    question : "Which HTML attribute is used to define inline styles?",
    
    options : [
        "class",
        "font",
        "styles",
        "style"
    ],
    
    answer : 3
    
    },
    
    {
    
    question : "Which CSS property is used to change the text color of an element?",
    
    options : [
        "text-color",
        "color",
        "fgcolor",
        "font-color"
    ],
    
    answer : 1
    
    },
    
    {
    
    question : "Which CSS property controls the text size?",
    
    options : [
        "font-style",
        "text-style",
        "text-size",
        "font-size"
    ],
    
    answer : 3
    
    }
];

//var questions IS AN ARRAY. Instead of storing flat strings/numbers, it stores objects. Each object has the following properties:

//ARRAYS START WITH 0

//questions – [String] THE QUESTION.
//options – [Array] THE AVALIABLE OPTIONS.
//answer – [Integer] THE CORRECT ANSWER.

//CONVERTING OBJECT BACK INTO A STRING 
let questions_serialized = JSON.stringify(questions);
console.log(questions_serialized);

//SET NEW SUBMISSION
localStorage.setItem("questions", questions_serialized);
console.log(localStorage);

// CONVERTING STRING BACK INTO AN OBJECT
let questions_deserialized = JSON.parse(localStorage.getItem("questions"));
console.log(questions_deserialized);

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
