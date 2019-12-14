const QUESTIONS = [
    {
        question: 'What are the 4 essential elements in making beer?',
        answers: [
        'Sodium Chloride, Calcium Carbonate, Calcium Chloride, Gypsum,',
        'Water, Bacteria, Malt, sugar', 
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
        'Dough in, Mill Grains, Heat Sparge Water, Boil'
        ],
        correctAnswer: 'Mash, boil, Cool, Ferment',
    },
    {
        question: 'What is the most popular type of beer brewed at home',
        answers: [
        'New England style India Pale Ale (hazy IPA)',
        'India Pale Ale',
        'lager',
        'Double India Pale Ale',
        ],
        correctAnswer: 'ale',
    },
    {
        question: 'What is the best way to increase ABV (alchol by volume) in homebrew?',
        answers: [
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
        'add sour fruits to the fermentation process',
        'add vinegar',
        'let it ferment for over 6 months',
        ],
        correctAnswer: 'let it get infected by bacteria',
    },
    {
        question: '',
        answers: [

        ],
        correctAnswer: '',
    },
];


//these will track the question number and user score
let questionNumber = 0
let score = 0

//this will generate the questions on the page
function generateQuestion() {
if (questionNumber < QUESTIONS.length) {
    return 
} 
};

//this will be responsible for updating the score
function updateScore() {

};

//this will 

//start the quiz
function start() {

}


