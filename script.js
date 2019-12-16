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
    $('.myButton')on('click', function(event) {
        generateQuestion();
    
    })
}

//this will generate the questions on the page
function generateQuestion() {
   let question = STORE[questionNumber].question
   const newQuestion = $(`
    <fieldset>
    <section class="showHide">
      <section class="startQuiz">
       <img class='opener'src='https://images.squarespace-cdn.com/content/v1/56e1fbe6ab48deac01d5c154/1457927093381-59GT2P6CACA6QO6HDVFN/ke17ZwdGBToddI8pDm48kFu-Xf_xBH4jjaFyPKcXHc0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxI40aVpaNQCVuZtw4vC4LyW0hEtVApzOfWJf5wtDBfi62S_BtPd07m31n8xoR4D0/image-asset.png'>
          <p>${question}</p>
       <button type="button" class="myButton">Start the quiz!</button>
       </section>
      <section class="questionHere"></section>
      <section class="responseHere"></section>
      <section class="finalHere"></section>
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
};

//this will be responsible for updating the score
function updateScore() {
    score++;
    $('.score').text(score);
};

//this will update the value of questionNumber 
function questionNumberIncrease() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
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