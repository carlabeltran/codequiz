/////////////////////// DOM ELEMENTS //////////////////////////////

////////////  DIRECTION CONTAINER (SECTION 1 OF 3)  //////////////

//START BUTTON
var startButton = document.getElementById("start-button");
console.log("start button element is working!");

/////////////// QUIZ CONTAINER (SECTION 2 OF 3) ///////////////////

//QUIZ SECTION (DIV)
var quizEL = document.getElementById("page1");
console.log("quiz page element is working!");

//QUESTIONS & OPTIONS CONTAINER (DIV)
var quizContainerEL = document.getElementById("quizContainer");
console.log("quiz container is working!");

//QUESTION CONTAINER (DIV)
var questionWrapper = document.getElementById("question-wrap");
console.log("question wrapper element is working!");

//QUESTION (H1)
var questionEl = document.getElementById("question");
console.log("question element is working");

//CHOICES CONTAINER


//QUESTION VALIDATION FOOTER


/////////////////////   TIMER   ///////////////////////////////////////

var timerEl = document.getElementById("ss");

var secondsLeft = 75;
var totalSeconds = 0;
var secondsElapsed = 0;
var timerStatus;
var interval;
var timerWarning = 10;

/////////////////////////////////////////////////////////////////////////

let answers, numberCorrectAnswers;

//INITIALIZING RANDOM QUESTION 
//QUESTION INDEX = CURRENT QUESTION NUMBER IN RANDOM QUESTIONS FUNCTION 
let randomQuestion, questionIndex;

////////////////// WINDOW ON LOAD ///////////////////////////////////////
window.onload = function () {
    console.log("window on load working!");
    
    //DISPLAY ONLY DIRECTIONS DIVS (SECTION 1 OF 3)
    document.getElementById("page0").style.display = "block";
    console.log("display directions page working!");
};

//////////////  EVENT LISTENER FOR START BUTTON  ////////////////////////

//START BUTTON EVENT LISTENER FOR START QUIZ FUNCTION
startButton.addEventListener("click", startQuiz);
console.log("start quiz event listener is working!");

/////////////  START QUIZ FUNCTION  /////////////////////////////////////
function startQuiz() {
    console.log("start quiz working!");

    //HIDE ALL DIRECTIONS CONTAINER DIVS
    document.getElementById("page0").style.display = "none";
    console.log("hide directions page working!");

    //RANDOM QUESTIONS = RANDOM ARRAY TAKES CURRENT QUESTION ARRAY & SORTS IT.
    //NEGITAVE NUMBER = SORTED A CERTAIN WAY.
    //POSITIVE NUMBER = SORTED ANOTHER WAY.
    //RANDOM NUMBER = BELOW 0 OR ABOVE 0 USE math.random() BETWEEN 1 - 0.
    //SUBTRACT .5 PROVIDES A NUMBER >0 OR <0 CREATING A RANDOM ARRAY.
    randomQuestion = questions.sort(() => Math.random() - .5);

    //INDEX SET AT 0 TO BEGIN ON FIRST QUESTION IN RANDOM QUESTION ARRAY
    currentQuestionIndex = 0;

    //DISPLAY ALL QUIZ CONTAINER DIVS(SECTION 2 OF 3)
    document.getElementById("page1").style.display = "block";
    console.log("display quiz page is working");

    //DISPLAY QUESTION & OPTIONS CONTAINER
    document.getElementById("questionOptionsContainer").style.display = "block";
    console.log("display question option container is working!");

    //DISPLAY QUESTION CONTAINER
    document.getElementById("question-wrap").style.display = "block";
    console.log("display question wrapper working");

    //DISPLAY QUESTION 
    document.getElementById("question").style.display = "block";
    console.log("display question working");

    //SET TIMER FUNCTION
    
    //LOAD QUESTIONS AND CHOICES FUNCTION

    setTime = setInterval(setTimer, 1000);

}
///////////////  TIMER FUNCTION  /////////////////////////////////////
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft == -1) {
            clearInterval(timerInterval);
            timeEl.textContent = " Time is up! ";
            quizOver();
        } else if (secondsLeft === 10) {
            timerWarning();
        }

    }, 1000);
}

//add animation to seconds
function timerWarning() {
    
}

function quizOver() {

}

setTime();
