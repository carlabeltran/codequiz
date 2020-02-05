////////////////////////////////////////////////////////     DOM ELEMENTS

//////////////////DIRECTIONS CONTAINER (SECTION 1 OF 3)////////////////////
//START BUTTON
var startButton = document.getElementById("start-button");

//////////////////QUIZ CONTAINER (SECTION 2 OF 3)//////////////////////////
//QUIZ CONTAINER
var quizEL = document.getElementById("page1");

//QUESTIONS & OPTIONS CONTAINER 
var quizContainerEL = document.getElementById("questionOptionsContainer");

//CURRENT QUESTION NUMBER
var questionNumberEl = document.getElementsByClassName("questionNumber");

//TOTAL NUMBER OF QUESTIONS
var totalQuestionsEl = document.getElementsByClassName("totalQuestions")

//QUESTION CONTAINER
var questionWrapper = document.getElementById("question-wrap");

//QUESTION (H1)
var questionEl = document.getElementById("question");

//OPTIONS CONTAINER
var optionsContainerEl = document.getElementById("optionsContainer")

//ALL OPTIONS
var optionsEl = document.getElementsByClassName("optionTxt")

//OPTION 1
var option1 = document.getElementById("btn0");

//OPTION 2
var option2 = document.getElementById("btn1");

//OPTION 3
var option3 = document.getElementById("btn2");

//OPTION 4
var option4 = document.getElementById("btn3");

//QUESTION VALIDATION FOOTER

var userAnswer;

var correctAnswer;

//INITIALIZING RANDOM QUESTION
//QUESTION INDEX = CURRENT QUESTION NUMBER IN RANDOM QUESTIONS FUNCTION 
let randomQuestion, currentQuestionIndex;

//QUESTION NUMBER THOURGH ARRAY
var questionIndex;

var index = 0;

/////////////////////////////////////////////////////////////////    TIMER 

//SECONDS
var timerEl = document.getElementById("ss");

var timerinterval;

var timePenalty = -15;

//////////////////////////////////////////////////////////////     SCORE

var score = 0;

var pointPenalty = -15;

//////////////////////////////////////////////////////////   WINDOW ON LOAD
window.onload = function () {
    
    //DISPLAY ONLY DIRECTIONS DIVS (SECTION 1 OF 3)
    document.getElementById("page0").style.display = "block";
    
    //LOADS RANDOM QUESTIONS
    randomQuestions();

};

//////////////        EVENT LISTENER       ////////////////////////

//START BUTTON EVENT LISTENER FOR START QUIZ FUNCTION
startButton.addEventListener("click", startQuiz);

/////////////      START QUIZ FUNCTION         //////////////////////////
function startQuiz() {

    //HIDES DIRECTIONS CONTAINER & ALL DIVS IN IT
    document.getElementById("page0").style.display = "none";

    //DISPLAY QUIZ CONTAINER DIVS(SECTION 2 OF 3)
    document.getElementById("page1").style.display = "block";

    //DISPLAY QUESTION & OPTIONS CONTAINER
    document.getElementById("questionOptionsContainer").style.display = "block";

    //DISPLAY QUESTION CONTAINER
    document.getElementById("question-wrap").style.display = "block";

    //DISPLAY QUESTION 
    document.getElementById("question").style.display = "block";

    //START TIMER FUNCTION
    setTime();

}
///////////////  TIMER FUNCTION  ///////////////////////////
function setTime() {
    
    var secondsLeft = 75;
    var timerInterval = setInterval(function () {
        
        secondsLeft -= 1;
        
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
        
            clearInterval(timerInterval);
        
        } 
    
    }, 1000);

};

///////////  LOAD QUESTION NUMBER, QUESTIONS, OPTIONS   //////////////////

//NUMBER OF QUESTIONS
totalQuestionsEl.innerHTML = question.length;
function load() {
    
    //
    questionNumberEl.innerHTML = index +1;
    
    //
    questionEl.innerHTML = questions[questionIndex].question;
    
    
    //
    option1.innerHTML = questions[questionIndex].options[0];
    
    //
    option2.innerHTML = questions[questionIndex].options[1];

    //
    option3.innerHTML = questions[questionIndex].options[2];

    //
    option4.innerHTML = questions[questionIndex].options[3];


    //INCREMENTS QUESTION
    index++;

}

//RANDOM QUESTION FUNCTION
function randomQuestions(){

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

function validation(question , answer){

}