var questions = [
    
    {
    q : "Commonly used data types DO NOT include:",
    
    o : [
        "strings",
        "booleans",
        "alerts", 
        "numbers"
    ],
    
    a : 2
    
    },
    
    {
    
    q : "The condition in an if / else statement is enclosed within ____.",
    
    o : [
        "quotes",
        "curly brackets",
        "parentheses",
        "square brackets"
    ],
    
    a : 2
    
    },
    
    {
    
    q : "Inside which HTML element do we put the JavaScript?",
    
    o : [
        "<js>",
        "<javascript>",
        "<scripting>",
        "<script>"
    ],
    
    a : 3
    
    },
    
    {
    
    q : "Which event occurs when the user clicks on an HTML element?",
    
    o : [
        "onmouseclick",
        "onmouseover",
        "onchange",
        "onclick"
    ],
    
    a : 3
    
    },
    
    {
    
    q : "How do you declare a Javascript variable?",
    
    o : [
        "variable carName",
        "var carName",
        "v carName",
        "const carname"
    ],
    
    a : 1
    
    },
    
    {
    
    q : "How do you round the number 7.25, to the nearest integer?",
    
    o : [
        "Math.round(7.25)",
        "rnd(7.25)",
        "Math.rnd(7.25)",
        "round(7.25)"
    ],
    
    a : 0
    
    },
    
    {
    
    q : "What does CSS stand for?",
    
    o: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
        "Cascading Style Sheets"
    ],
    
    a : 3
    
    },
    
    {
    
    q : "Which HTML attribute is used to define inline styles?",
    
    o : [
        "class",
        "font",
        "styles",
        "style"
    ],
    
    a : 3
    
    },
    
    {
    
    q : "Which CSS property is used to change the text color of an element?",
    
    o : [
        "text-color",
        "color",
        "fgcolor",
        "font-color"
    ],
    
    a : 1
    
    },
    
    {
    
    q : "Which CSS property controls the text size?",
    
    o : [
        "font-style",
        "text-style",
        "text-size",
        "font-size"
    ],
    
    a : 3
    
    }
];

//converting the object back into a string so that local storage can store
let questions_serialized = JSON.stringify(questions);
//console.log(questions_serialized);

// set new submission
localStorage.setItem("questions", questions_serialized);
//console.log(localStorage);

//converting the string back into an object 
let questions_deserialized = JSON.parse(localStorage.getItem("questions"));
//console.log(questions_deserialized);

// Resource: https://code-boxx.com/simple-javascript-quiz/
/* [THE "DATABASE" - QUESTIONS, OPTIONS, ANSWERS] */
// An array that contains objects
// In the format of {q: QUESTION, o: OPTIONS, a: CORRECT ANSWER} 

//var questions is an array.Instead of storing flat strings/numbers, it stores objects instead. Each object has the following properties:

// arrays start with 0

//q – [String] The question.
//o – [Array] The available options.
//a – [Integer] The correct answer.

//data array is what we call Javascript Object Notation (JSON). https://code-boxx.com/json-php-javascript-beginners/


//// questions on your HTML this goes in you other Java file ////////////

//var question = localStorage.getItem("question")
//('q: ', JSON.parse(question));
//console.log('q: ', JSON.parse(question));

///////// retreive q (question) ///////////// 

//const q = localStorage.getItem("q");

//console.log('q: ', JSON.parse(q));


////////retrieve o (options) in the array//////////

//const o = localStorage.getItem(“o”);

//console.log(‘o: ', JSON.parse(o));


/////////retrieve a (answers) in the array//////

//const a = localStorage.getItem("a");

//console.log('a: ', JSON.parse(a));