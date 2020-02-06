///////////////////////////////////////////////////////////////////////////
//DOM ELEMENTS
///////////////////////////////////////////////////////////////////////////

//////////////////DIRECTIONS CONTAINER (SECTION 1 OF 3)////////////////////

//START BUTTON
var startButton = document.getElementById("start-button");

//////////////////////////TIMER//////////////////////////////////////////// 

//SECONDS
var timerEl = document.getElementById("ss");

var allowedTime;

var secondsLeft = 75;

///////////////////QUIZ CONTAINER (SECTION 2 OF 3)//////////////////////////

//QUIZ CONTAINER
var quizEL = document.getElementById("page1");

//QUESTIONS & OPTIONS CONTAINER 
var quizContainerEL = document.getElementById("questionOptionsContainer");

//////////////////////////QUIZ HEADER///////////////////////////////////////

//CURRENT QUESTION NUMBER
var questionNumberEl = document.querySelector(".questionNumber");

//TOTAL NUMBER OF QUESTIONS
var totalQuestionsEl = document.querySelector(".totalQuestions");

//NUMBER OF EACH QUESTION IN THE QUESTIONS ARRAY
var questionIndex;

//CURRENT QUESTION NUMBER IN THE HEADER 
var index = 0;

let randomQuestion,currentQuestionIndex;
////////////////////////QUESTION////////////////////////////////////////////

//QUESTION CONTAINER
var questionWrapper = document.getElementById("question-wrap");

//QUESTION (<H1>)
var questionEl = document.querySelector(".question");

////////////////////////OPTIONS/////////////////////////////////////////////

//OPTIONS CONTAINER
var optionsContainerEl = document.getElementById("optionsContainer");

//OPTION 1
var option1 = document.querySelector(".option0");

//OPTION 2
var option2 = document.querySelector(".option1");

//OPTION 3
var option3 = document.querySelector(".option2");

//OPTION 4
var option4 = document.querySelector(".option3");

////////////////////////QUIZ FOOTER/////////////////////////////////////////

//QUESTION VALIDATION
var message = document.querySelector(".questionVal");

//////////////////////RESULTS CONTAINER (SECTION 3 OF 3)/////////////////////

//RESULTS CONTAINER
var resultsContainer = document.getElementById("page2");

//SCORE
var score = 100;

var highScore = 0;

//POINTS/SCORE
//var resultsContainer = document.getElementById("page2");

//NUMBER OF CORRECT ANSWERS
//var resultsContainer = document.getElementById("page2");

//TOTAL NUMBER OF QUESTIONS 
//var resultsContainer = document.getElementById("page2");

//MESSAGE BASED ON THE NUMBER OF CORRECT ANSWERS

//SUBMIT INITIALS BUTTON
var submitButton = document.getElementById("submit-button");

//RESTART QUIZ BUTTON
var restartButton = document.getElementById("restart-button");

///////////////////////////////////////////////////////////////////////////
//EVENT LISTENERS
///////////////////////////////////////////////////////////////////////////

//START BUTTON EVENT LISTENER FOR START QUIZ FUNCTION
startButton.addEventListener("click", startQuiz);

//SUBMIT BUTTON EVENT LISTENER FOR SUBMIT QUIZ SCORE FUNCTION
//submitButton.addEventListener("click", submitQuiz);

//RESTART BUTTON EVENT LISTENER FOR START NEW QUIZ FUNCTION
//restartButton.addEventListener("click", newQuiz);

//OPTION 1 EVENT LISTENER TO DISPLAY NEXT QUESTION FUNCTION
//option1.addEventListener("click", nxtQuestion);

//OPTION 2EVENT LISTENER TO DISPLAY NEXT QUESTION FUNCTION
//option2.addEventListener("click", nxtQuestion);

//OPTION 3 EVENT LISTENER TO DISPLAY NEXT QUESTION FUNCTION
//option3.addEventListener("click", nxtQuestion);

//OPTION 4 EVENT LISTENER TO DISPLAY NEXT QUESTION FUNCTION
//option4.addEventListener("click", nxtQuestion);

///////////////////////////////////////////////////////////////////////////
//RANDOM QUESTION FUNCTION
///////////////////////////////////////////////////////////////////////////
function randomQuestions() {
    //RANDOM QUESTION = RANDOM ARRAY TAKES QUESTION ARRAY & SORTS IT.
    //NEGITAVE NUMBER = SORTED A CERTAIN WAY.
    //POSITIVE NUMBER = SORTED ANOTHER WAY.
    //RANDOM NUMBER = BELOW 0 OR ABOVE 0 USE math.random() BETWEEN 1 - 0.
    //SUBTRACT .5 PROVIDES A NUMBER >0 OR <0 CREATING A RANDOM ARRAY.
    randomQuestion = questions.sort(() => Math.random() - .5);

    //QUESTION INDEX SET TO 0 INORDER TO BEGIN ON FIRST QUESTION IN RANDOM QUESTION ARRAY
    currentQuestionIndex = 0;
    
    questionIndex = currentQuestionIndex;
    
    //FUNCTION TO LOAD QUESTIONS,OPTIONS, AND QUESTIONS NUMBER
    load();
    
}

///////////////////////////////////////////////////////////////////////////
//LOADS & DISPLAYS QUESTION NUMBER, QUESTIONS, OPTIONS AND INCREMENTS QUESTION
///////////////////////////////////////////////////////////////////////////

//DISPLAYS TOTAL NUMBER OF QUESTIONS IN QUESTIONS ARRAY IN QUIZ HEADER
totalQuestionsEl.innerHTML = questions.length;

function load() {
    
    //DISPLAYS CURRENT QUESTION NUMBER IN THE QUIZ HEADER
    questionNumberEl.innerHTML = index + 1;
    
    //DISPLAYS THE QUESTION IN HTML <H1> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].QUESTION
    questionEl.innerHTML = questions[questionIndex].q;

    //DISPLAYS QUESTION OPTION 1 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 0
    option1.innerHTML = questions[questionIndex].options[0];
    
    //DISPLAYS QUESTION OPTION 2 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 1
    option2.innerHTML = questions[questionIndex].options[1];

    //DISPLAYS QUESTION OPTION 3 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 2
    option3.innerHTML = questions[questionIndex].options[2];

    //DISPLAYS QUESTION OPTION 4 IN HTML <DIV> = QUESTIONS ARRAY[QUESTION INDEX NUMBER].OPTION 3
    option4.innerHTML = questions[questionIndex].options[3];

    //INCREMENTS CURRENT QUESTION NUMBER IN THE QUIZ HEADER
    index++;

}

///////////////////////////////////////////////////////////////////////////
//START QUIZ FUNCTION
///////////////////////////////////////////////////////////////////////////
function startQuiz() {
    
    //LOAD RANDOM QUESTIONS
    randomQuestions();

    //HIDES DIRECTIONS CONTAINER & ALL DIVS IN IT
    document.getElementById("page0").style.display = "none";
    
    //DISPLAY QUIZ CONTAINER DIVS(SECTION 2 OF 3)
    document.getElementById("page1").style.display = "block";

    //START TIMER FUNCTION
    setTime();

    //DISPLAY QUESTION & OPTIONS CONTAINER
    document.getElementById("questionOptionsContainer").style.display = "block";

    //DISPLAY QUESTION CONTAINER
    document.getElementById("question-wrap").style.display = "block";

    allowedTime = setInterval(setTime, 1000)
};

///////////////////////////////////////////////////////////////////////////
//TIMER STATUS
///////////////////////////////////////////////////////////////////////////
function setTime() {
    timerEl.textContent = secondsLeft;

    secondsLeft -= 1;

    timerEl.textContent = secondsLeft;
    if( secondsLeft <= 0 ){
        endQuiz();
        clearInterval(allowedTime);
    }

};

///////////////////////////////////////////////////////////////////////////
//VALIDATION STATUS
///////////////////////////////////////////////////////////////////////////
//ONCLICK FUNCTION TO CHECK SELECTED OPTION STATUS
function questionVal(element) {

    //IF ELEMENT ID IS THE SAME AS QUESTION ANSWER
    if(element.id == questions[questionIndex].answer) {
    //== CONVERTS VARIABLE VALUES TO SAME TYPE BEFORE COMPARING
        element.classList.add("correct");

    }
    
    else {
        element.classList.add("incorrect");
        secondsLeft = secondsLeft -15;
        score = score -10;
    
    }

    clearQuestion();
    nxtQuestion();
    endQuiz();

};

///////////////////////////////////////////////////////////////////////////
//SAVE USER ANSWERS FUNCTION 
///////////////////////////////////////////////////////////////////////////
function userAnswer() {

}

///////////////////////////////////////////////////////////////////////////
//DISPLAY NEXT QUESTION
///////////////////////////////////////////////////////////////////////////
function nxtQuestion() {

}

///////////////////////////////////////////////////////////////////////////
//CLEAR VALIDATION BACKGROUND FOR NEXT QUESTIONS
///////////////////////////////////////////////////////////////////////////
function clearValStatus(element){
    element.classList.remove("correct");
    element.classList.remove("incorrect");
    
}

///////////////////////////////////////////////////////////////////////////
//CLEAR QUESTION AND OPTIONS IN PREPERATION FOR NEXT QUESTION AND OPTIONS
///////////////////////////////////////////////////////////////////////////
function clearQuestion() {
    clearValStatus();
    questionEl.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
}

///////////////////////////////////////////////////////////////////////////
//CHECK QUIZ STATUS IF CONDITIONS ARE MET END THE QUIZ 
///////////////////////////////////////////////////////////////////////////
function endQuiz() {
    //IF QUESTIONS INDEX  IS GREATER THAN OR EQUAL TO TOTAL QUESTIONS OR TIMER IS LESS THAN OR EQUAL TO 0
    if(questionNumberEl >= totalQuestionsEl || secondsLeft >= 0){
        
        //HIDES QUIZ CONTAINER DIVS(SECTION 2 OF 3)
        document.getElementById("page1").style.display = "none";
        
        //DISPLAYS RESULTS CONTAINER DIVS(SECTION 3 OF 3)
        document.getElementById("page2").style.display = "block";
    
        //CLEARS TIMER
        clearInterval(allowedTime);
    }
}