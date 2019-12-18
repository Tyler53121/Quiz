'use strict';

const STORE = {
    {
        question: 'What are the 4 essential elements in making beer?',
        a: 'Sodium Chloride, Calcium Carbonate, Calcium Chloride, Gypsum,',
        b: 'Water, Bacteria, Malt, sugar',
        c: 'Water, Yeast, Malt, Hops', 
        d: 'Citra, Galaxy, Mosiac, Centennial',
        e: 'Barley, Apples, Honey, Water'   
        correctAnswer: 'Water, Yeast, Malt, Hops',
        explaination: 'if you got this one wrong you can probably stop right Headers', 
    },
    {
        question: 'What is the correct process for homebrewing in the correct order',
        a: 'Water treatment and propagation, mill grains, heat strike water, mash out',
        b: 'Boil, whirlpool hop, turbid mash, bottle',
        c: 'Fermentation, Carbonation, Aeration, Packaging',
        d: 'Mash, boil, Cool, Ferment',
        e: 'Dough in, Mill Grains, Heat Sparge Water, Boil'
        correctAnswer: 'Mash, boil, Cool, Ferment',
        explaination: 'only slighty more difficult than the first question if you are a homebrewer,'
    },
    {
        question: 'What is the most popular type of beer brewed at home',
        a: 'New England style India Pale Ale (hazy IPA)',
        b: 'India Pale Ale',
        c: 'Double India Pale Ale',
        d: 'lager',
        e: 'Ale'
        correctAnswer: 'Ale',
        explaination: 'okay so this is kind of a trick question. while IPA is by far the most populate style of beer, there are only two types of beer, lager and ale. Ale is by far the most popular'
    },
    {
        question: 'What is the best way to increase ABV (alchol by volume) in homebrew?',
        a: 'Add sugar in the last 5 minutes of the boil',   
        b: 'use a highly flocculent yeast',
        c: 'Mill your grains extra fine to increase brewhouse efficiency',
        d: 'Add fruit to the fermentation process',
        e: 'Add twice the amount of hops'
        correctAnswer: 'Add sugar in the last 5 minutes of the boil',
        explaination: 'while some of the methods listed will work, the best and most easy way is to add sugar to your boil increasing the starting gravity. However, you will need to be sure that you are using an alcohol tolerant yeast if you want your final product to have the high ABV that you are looking for.'
    },
    {
        question: 'There are many ways to make a beer “sour”, which of the ways below will work best',
        a: 'use souring hops',
        b: 'let it get infected by bacteria',
        c: 'add sour fruits to the fermentation process',
        d: 'add vinegar',
        e: 'let it ferment for over 6 months',
        correctAnswer: 'let it get infected by bacteria',
        explaination: 'souring in beer is caused by three specific yeast/bacteria, pediococcus bacteria, lactobacilus bacteria, and Brettanomyces yeast, which cause the souring effect in beers.  '
    }
};

/*
//these will track the question number and user score
let questionNumber = 0 //this was currentQuestion = 0
let score = 0

//these are variables I used to save myself time from having to repeat myself. (I know they are global,
// its a small enough program i plan on removing this at the end,
let question = STORE[questionNumber].question
let answers = STORE[questionNumber].answers
let correctAnswer = STORE[questionNumber].correctAnswer


//start the quiz
function start() {
    $('.start').on('click', function(event) {
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
       $('.questionNumber').text(5)
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

    const generateNewQuestion = $(`
    <fieldset>
    <section class="showHide">  
          <p>${question}</p>
      <input type="radio" class="questionHere">${answers}</section> //I dont know if this will display correctly?
      <button type="submit" role="selectAnswer" class="start">are you sure?</button>
    </section>
    </fieldset>
    `);

    $('main').html(generateNewQuestion);
}
//dont know how 

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
*/
/////////////////////////////////// object oriented approach

const counter = {
    index: 0,
    score: 0,
    question: 1,
    indexUp: () => {counter.index += 1},
    scoreUp: () => {counter.score += 1},
    questionUp: () => {counter.question += 1},
},

//change the view

const view = {
    hide: element => {
        $(element).addClass('js-hidden');
    },
    show: element => {
        $(element).removeClass('js-hidden');

    }
};

//focus on elements

const focusElement = {
    form: () => {
        $('#js-question-form input').focus();
    },
};

//render HTML element

const render {
    start: () => {
        $('#js-start-section').html(`
        <div class="container-box" id="js-start-content>    
            <section role="region" class="main-content">
                <header role="intro">
                    <img class='opener'src='https://images.squarespace-cdn.com/content/v1/56e1fbe6ab48deac01d5c154/1457927093381-59GT2P6CACA6QO6HDVFN/ke17ZwdGBToddI8pDm48kFu-Xf_xBH4jjaFyPKcXHc0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxI40aVpaNQCVuZtw4vC4LyW0hEtVApzOfWJf5wtDBfi62S_BtPd07m31n8xoR4D0/image-asset.png'>
                </header>
                <p>Do you homebrew? Homebrewing can be done in many different ways. The answers to these questions are subjective. Just try to answer to the best of your knowledge and ability to see if you should drink less and study more!</p>          
            </section>
            <button type="button" class="start">Start the quiz!</button>
        </div>
        `);    
        }
    },
    question: () => {
        $('#js-question-section').html(`
        <div class="container-box">
            <section role="region"  id="js-question-content">
                <h1>${STORE[counter.index].question}</h1>
            </section>
            <section class="radio-form">
                <form id="js-question-form>
                    <fieldset class='form-group'>
                     <div class='form-check'>
                      <label class="form-check-label">
                        <input type='radio' class='form-check-input' 
                        name='radio-input' id='radio-input' 
                        value="${STORE[counter.index].a}" unchecked>
                         ${STORE[counter.index].a}
                      </label>
                     </div>
                     <div class='form-check'>
                      <label class="form-check-label">
                        <input type='radio' class='form-check-input' 
                        name='radio-input' id='radio-input' 
                        value="${STORE[counter.index].b}" unchecked>
                         ${STORE[counter.index].b}
                      </label>
                     </div>
                     <div class='form-check'>
                      <label class="form-check-label">
                        <input type='radio' class='form-check-input' 
                        name='radio-input' id='radio-input' 
                        value="${STORE[counter.index].c}" unchecked>
                         ${STORE[counter.index].c}
                      </label>
                     </div>
                     <div class='form-check'>
                      <label class="form-check-label">
                        <input type='radio' class='form-check-input' 
                        name='radio-input' id='radio-input' 
                        value="${STORE[counter.index].d}" unchecked>
                         ${STORE[counter.index].d}
                      </label>
                     </div>
                     <div class='form-check'>
                      <label class="form-check-label">
                        <input type='radio' class='form-check-input' 
                        name='radio-input' id='radio-input' 
                        value="${STORE[counter.index].e}" unchecked>
                         ${STORE[counter.index].e}
                      </label>
                     </div>
                    </fieldset>
                  <button type="submit" class="next">try your luck!</button>
                </form>
                



        </div>
        `)
    }
