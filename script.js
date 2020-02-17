//TESTING IF JAVA AND HTML PAGE ARE LINKED PROPERLY 
console.log("CODE QUIZ SCRIPT LINKED!!");


///////////////////////////////////////////////////////////////////////////
//DOM ELEMENTS
//////////////////DIRECTIONS CONTAINER (SECTION 1 OF 3)////////////////////
//START BUTTON
var startButton = document.getElementById("start-button");

///////////////////QUIZ CONTAINER (SECTION 2 OF 3)//////////////////////////
//QUIZ VARIABLES
var allowedTime;
var secondsLeft = 75;

//NUMBER OF EACH QUESTION IN THE QUESTIONS ARRAY(TOTAL QUESTIONS)
var questionIndex;

//CURRENT QUESTION NUMBER IN THE HEADER
var index = 0;

//INITIALIZING RANDOM QUESTIONS ESTABLLISH CURRENT QUESTION IN RANDOM QUESTIONS ARRAY(UNDEFIEND VALUE)REDEFINE LATER
let randomQuestion, currentQuestionIndex;

//////////////////////////TIMER////////////////////////////////////////////
//SECONDS
var timerEl = document.getElementById("ss");

//QUIZ CONTAINER
var quizEL = document.getElementById("page1");

//QUESTIONS & OPTIONS CONTAINER 
var quizContainerEL = document.getElementById("questionOptionsContainer");

//////////////////////////QUIZ HEADER///////////////////////////////////////
//CURRENT QUESTION NUMBER
var questionNumberEl = document.querySelector(".questionNumber");

//TOTAL NUMBER OF QUESTIONS
var totalQuestionsEl = document.querySelector(".totalQuestions");

////////////////////////QUESTION////////////////////////////////////////////
//QUESTION (<H1>)
var questionEl = document.getElementById("question");

////////////////////////OPTIONS/////////////////////////////////////////////
//ALL THE OPTIONS CONTAINER & ALL OPTIONS
var options = document.querySelector(".options").children;

//OPTION 1
var option1 = document.querySelector(".option1");

//OPTION 2
var option2 = document.querySelector(".option2");

//OPTION 3
var option3 = document.querySelector(".option3");

//OPTION 4
var option4 = document.querySelector(".option4");

////////////////////////QUIZ FOOTER/////////////////////////////////////////
//QUESTION VALIDATION
var message = document.querySelector(".questionVal");

//////////////////////RESULTS CONTAINER (SECTION 3 OF 3)/////////////////////
//RESULTS CONTAINER
var resultsContainer = document.getElementById("page2");

//SCORE
var score = 75;

// USER HIGH SCORE
var highScore = 0;

//USER RESULTS CONTAINER
var userResults = document.getElementById("userSelectedResults");

//SAVE INITIALS BUTTON
var saveButton = document.getElementById("save-button");

//RESTART QUIZ BUTTON
var restartButton = document.getElementById("restart-button");

///////////////////   HIGH SCORE PAGE CONTAINER   //////////////////////////
//HIGH SCORE PAGE
var highScoreEL = document.getElementById("page3");

//HIGH SCORE LIST
var highScoreListEL = document.querySelector(".highScoreList");

//BACK BUTTON
var returnButtonEl = document.getElementById("return-button");

//CLEAR HIGH SCORE BUTTON
var clearScoreButtonEl = document.getElementById("clearScoreButton");
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//EVENT LISTENERS
///////////////////////////////////////////////////////////////////////////
//START BUTTON
startButton.addEventListener("click", startQuiz);
console.log(startButton);
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
//START QUIZ FUNCTION
///////////////////////////////////////////////////////////////////////////
function startQuiz() {
    console.log(startQuiz);

    //HIDES DIRECTIONS CONTAINER & ALL DIVS IN IT
    document.getElementById("page0").style.display = "none";

    randomQuiz();
    
    //START TIMER FUNCTION
    setTime();

    //DISPLAY QUIZ CONTAINER DIVS(SECTION 2 OF 3)
    document.getElementById("page1").style.display = "block";

    allowedTime = setInterval(setTime, 1000);
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//DISPLAYS QUESTION NUMBER, TOTAL QUESTION NUMBER, QUESTIONS, OPTIONS AND INCREMENTS QUESTION
///////////////////////////////////////////////////////////////////////////
//DISPLAYS TOTAL NUMBER OF QUESTIONS IN QUESTIONS ARRAY ON THE QUIZ HEADER(10)
totalQuestionsEl.innerHTML = questions.length;
function displayQuestions() {
    console.log(displayQuestions);
    
    //DISPLAYS CURRENT QUESTION NUMBER ON THE QUIZ HEADER
    questionNumberEl.innerHTML = index + 1;

    //DISPLAYS THE QUESTION IN HTML <H1> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].QUESTION
    questionEl.innerText = questions[questionIndex].question;

    //DISPLAYS QUESTION OPTION 1 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 0
    option1.innerText = questions[questionIndex].options[0];
    
    //DISPLAYS QUESTION OPTION 2 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 1
    option2.innerText = questions[questionIndex].options[1];

    //DISPLAYS QUESTION OPTION 3 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 2
    option3.innerText = questions[questionIndex].options[2];

    //DISPLAYS QUESTION OPTION 4 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 3
    option4.innerText = questions[questionIndex].options[3];

    //INCREMENTS CURRENT QUESTION NUMBER ON THE QUIZ HEADER
    index++;
    
    console.log(index);
    console.log(options);
    console.log({ question });
    console.log({ options });
    console.log(question);
    console.log("question: ", question);
    console.log("options: ", options);
};

console.log(index);
console.log(options);
console.log({ question });
console.log({ options });
console.log(question);
console.log("question: ", question);
console.log("options: ", options);
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//CREATES A RANDOM QUESTION
///////////////////////////////////////////////////////////////////////////
function randomQuiz() {
    
    console.log(randomQuiz);

    //RANDOM QUESTION = TAKES A RANDOM QUESTION NUMBER FROM THE TOTAL QUESTIONS
    randomQuestionNumber = Math.floor(Math.random() * questions.length);

    //RANDOM QUESTION NUMBER EQUALS CURRENT QUESTION INDEX NUMBER
    questionIndex = randomQuestionNumber;

    displayQuestions();
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
//TIMER STATUS
///////////////////////////////////////////////////////////////////////////
function setTime() {

    secondsLeft -= 1;

        //DISPLAYS SECONDS IN HTML
        timerEl.textContent = secondsLeft;
    
            //IF SECONDS LEFT IS LESS THAN OR EQUAL TO -1
            if( secondsLeft <= 0 ) {
        
                clearInterval(allowedTime);
        
            }
    quizStatus();
    
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////
//USER SELECTED OPTION QUIZ VALIDATION STATUS
///////////////////////////////////////////////////////////////////////////

var correct = true;

var incorrect = false;

//ONCLICK FUNCTION TO VALIDATE SELECTED OPTION
function questionVal(element) {

    console.log(element);

    //ALERT MESSAGE VARIABLE 
    var alertMessage;

    //IF ELEMENT ID IS THE SAME AS QUESTIONS[INDEX].ANSWER
    if ( element.id == questions[questionIndex].answer ) {
    //== CONVERTS VARIABLE VALUES TO SAME TYPE BEFORE COMPARING
        
        //console.log(element.id);
    
        console.log(correct);

        //ADDS THE CORRECT COLOR GREEN TO THE BACKGROUND OF THE DIV BUTTON
        element.classList.add("correct");

        //CORRECT ALERT MESSAGE
        alertMessage = "Correct!";

        score = highScore++;

        answer = true;

    } else {
        console.log("incorrect");
        
        //ADDS THE INCORRECT COLOR RED TO THE BACKGROUND OF THE DIV BUTTON
        element.classList.add("incorrect");

        //DEDUCTS -15 SECONDS FROM THE CURRENT SECONDS LEFT (INCORRECT OPTION PENALTY)
        secondsLeft = secondsLeft - 15;

        //DEDUCTS -15 POINTS FROM THE CURRENT SCORE
        highScore = score - 15;

        //INCORRECT ALERT MESSAGE
        alertMessage = "Incorrect!";

        answer = false;

    };

    //DISABLES OPTIONS ONCE ONCE ONE OPTION IS SELECTED
    disable();

    //DISPLAYS ALERT MESSAGE BASED ON USER SELECTED OPTION 
    document.getElementById("message").innerHTML = alertMessage;
    
    //CHECK QUIZ STATUS
    quizStatus();

    console.log("answer: ", answer);
    console.log("options: ", options);
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////
//DISABLE ALL OPTIONS ONCE ONE OPTION IS SELECTED & SHOW CORRECT ANSWER VALIDATION BACKGROUND COLOR
///////////////////////////////////////////////////////////////////////////
function disable() {

    for ( let optionsId = 0; optionsId < options.length; optionsId++ ) {
    
        options[optionsId].classList.add("disable");

        //SHOW THE CORRECT OPTION
        if (options[optionsId].id == questions[questionIndex].answer) {
        
            options[optionsId].classList.add("correct");
        }
    };

};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//CLEAR QUESTION & SET OF OPTIONS IN PREPERATION FOR NEXT QUESTION & SET OF OPTIONS
///////////////////////////////////////////////////////////////////////////
function clearQuestion() {
    
    //CLEARS QUESTION
    questionEl.innerHTML = "";
    
    //CLEARS OPTION 1 BUTTON
    options[0].innerHTML = "";
    
    //CLEARS OPTION 2 BUTTON
    options[1].innerHTML = "";
    
    //CLEARS OPTION 3 BUTTON
    options[2].innerHTML = "";
    
    //CLEARS OPTION 4 BUTTON
    options[3].innerHTML = "";

    clearValStatus(element);

    enable();
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//CLEAR VALIDATION BACKGROUND COLOR FOR OPTIONS IN PREPERATION FOR NEXT QUESTION & SET OF OPTIONS
///////////////////////////////////////////////////////////////////////////
function clearValStatus(element){
    
    element.classList.remove("correct");
    
    element.classList.remove("incorrect");
    
}
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
//ENABLE OPTIONS IN PREPERATION FOR NEXT QUESTION & SET OF OPTIONS
///////////////////////////////////////////////////////////////////////////
function enable() {

    for(let option = 0; option < options.length; option++) {
        
        options[option].classList.remove("disable");
    };

};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
//CHECKS QUIZ STATUS 
///////////////////////////////////////////////////////////////////////////
//parsing question number
//var currentQuestionIndex = parseInt(questionIndex.innerText).value;

//use parse int to solve the number solution
//var questionNumberValue = parseInt(questionIndex.innerText).value;
function quizStatus() {

    //IF QUESTIONS INDEX IS GREATER THAN OR EQUAL CURRENT Q OR TIMER IS LESS THAN OR EQUAL TO 0
    if ( questionIndex >= questions.length || secondsLeft <= 0) {
        
        //HIDES QUIZ CONTAINER DIVS(SECTION 2 OF 3)
        document.getElementById("page1").style.display = "none";
        
        //DISPLAYS RESULTS CONTAINER DIVS(SECTION 3 OF 3)
        document.getElementById("page2").style.display = "block";
    
        //
        document.querySelector(".resultScore").innerHTML = secondsLeft;

        //CLEARS TIMER
        clearInterval(allowedTime);
    };
};
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////