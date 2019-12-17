'use strict';

const STORE = [
    {
        question: 'What are the 4 essential elements in making beer?',
        answers: [
        'Sodium Chloride, Calcium Carbonate, Calcium Chloride, Gypsum,',
        'Water, Bacteria, Malt, sugar',
        'Water, Yeast, Malt, Hops', 
        'Citra, Galaxy, Mosiac, Centennial',
        'Barley, Apples, Honey, Water'   
        ],
        correctAnswer: 'Water, Yeast, Malt, Hops', 
    },
    {
        question: 'What is the correct process for homebrewing in the correct order',
        answers: [
        'Water treatment and propagation, mill grains, heat strike water, mash out',
        'Boil, whirlpool hop, turbid mash, bottle',
        'Fermentation, Carbonation, Aeration, Packaging',
        'Mash, boil, Cool, Ferment',
        'Dough in, Mill Grains, Heat Sparge Water, Boil'
        ],
        correctAnswer: 'Mash, boil, Cool, Ferment',
    },
    {
        question: 'What is the most popular type of beer brewed at home',
        answers: [
        'New England style India Pale Ale (hazy IPA)',
        'India Pale Ale',
        'Double India Pale Ale',
        'lager',
        'Ale'
        ],
        correctAnswer: 'Ale',
    },
    {
        question: 'What is the best way to increase ABV (alchol by volume) in homebrew?',
        answers: [
        'Add sugar in the last 5 minutes of the boil',   
        'use a highly flocculent yeast',
        'Mill your grains extra fine to increase brewhouse efficiency',
        'Add fruit to the fermentation process',
        'Add twice the amount of hops'
        ],
        correctAnswer: 'Add sugar in the last 5 minutes of the boil',
    },
    {
        question: 'There are many ways to make a beer “sour”, which of the ways below will work best',
        answers: [
        'use souring hops',
        'let it get infected by bacteria',
        'add sour fruits to the fermentation process',
        'add vinegar',
        'let it ferment for over 6 months',
        ],
        correctAnswer: 'let it get infected by bacteria',
    }
];


//these will track the question number and user score
let questionNumber = 0 //this was currentQuestion = 0
let score = 0

//these are variables I used to save myself time from having to repeat myself. (I know they are global,
// its a small enough program),
let question = STORE[questionNumber].question
let answers = STORE[questionNumber].answers
let correctAnswer = STORE[questionNumber].correctAnswer


//start the quiz
function start() {
    $('.myButton').on('click', function(event) {
        generateQuestion();
    
    });
}

//this will generate the questions on the page
function generateQuestion(questionNumber) {
   if (questionNumber < STORE.length) {
       return newQuestion(questionNumber)//increases after unless you are on final question
   }
   else {
       $('.questionHere').hide();//hides the area which would display questions
       displayFinal(); //displays the final screen
   }
}

function newQuestion(questionIndex) {
    let question = STORE[questionNumber].question
    let displayQuestion = $(`
    <form>
        <fieldset>
            <legend class="questionDisplay">${question}</legend>
        <fieldset>
    </form>
    `)

    let displayAnswers = $(displayQuestion).find('fieldset');
    //need to hide all the previous material and display the newQuestion below
}   let answers = STORE[questionNumber].answers

    const newQuestion = $(`
    <fieldset>
    <section class="showHide">  
          <p>${question}</p>
      <input type="radio" class="questionHere">${answers}</section> //I dont know if this will display correctly?
      <button type="submit" role="selectAnswer" class="start">are you sure?</button>
    </section>
    </fieldset>
    `);

    $('main').html(newQuestion);
}


function renderQuestion() {
    
};

//this will be responsible for showing the final page
function finalScore() {
    $('.finalHere').show();
<p>Well, you gave it your best and you answered ${score} questions correct</p>

};

//this will be responsible for updating the score
function updateScore() {
    score + 1;
    $('.questionTracker').text(score);
};

//this will update the value of questionNumber 
function questionNumberIncrease() {
    questionNumber + 1;
    $('.questionNumber').text(questionNumber + 1);
}

//to determine if an answer is correct
function determine() {
$('.start').on('submit', function(event) {
    event.preventDefault();
    //need to hide current box
    //need to show response box
    let selected = $('input:checked');
    let inputAnswer = selected.val();
    if(inputAnswer === STORE[questionNumber].correctAnswer) {
        //need to show HTML for correct answer
    }
    else {
        //show HTML for incorrect answer
    }

    )
}
}
function correctAnswer() {
    $(".responseHere").html(`
    <p>you got the answer correct</p>
    `);
}

function incorrectAnswer() {
    $('.responseHere').html(`
    <p>unfortunately you didnt get this one right, better luck next time!</p>
    `)
}





function final() {
    $('.finish').show();
}

function restart() {
    score = 0;
    questionNumber = 0;
    $('.score').text(0);
    $('.questionNumber').text(0);
}

function letsDoThis() {
    start();
    generateQuestion();
}


$(letsDoThis);

/////////////////////////////////// object oriented approach
/*
const counter = {
    index: 0,
    score: 0,
    question: 1,
    indexUp: () => {counter.index += 1},
    scoreUp: () => {counter.score += 1},
    questionUp: () => {counter.question += 1},
},

function start() {

}
*/