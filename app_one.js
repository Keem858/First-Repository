var colorGeneratorCounter = 0;
var prevRng;
var button = document.querySelector('.temp');

function createHexaColor(){
    var maxColorVal = 0xFFFFFF; //16777215
    var randomNumber = Math.floor(Math.random() * maxColorVal);
    randomNumber = randomNumber.toString(16);
    randColor = randomNumber.padStart(6,0);
    randColor = `#${randColor.toUpperCase()}`;

    return(randColor);
}

function colorGenerator(){
    var colorContainer = document.querySelector(".color-container"); //color-container from the html css

    let randColor = createHexaColor();
    console.log("This is the answer: " + randColor);

    colorContainer.style.backgroundColor = randColor;

    colorGeneratorCounter++;
}

//function to keep track if the click is even or odd
function evenOrOdd(counter){
    if(counter % 2 == 0){
        return true;
    }else{
        return false;
    }
}

//generate the question based on colorGeneratorCounter being even or odd
function generateQuestion(){
    var questionText = document.querySelector(".question-text");

    var questionArr = ["What is the hexadecimal value of this color?",
    "What is the rgb value of this color?"];

    questionText.innerHTML = '';

    if(evenOrOdd(colorGeneratorCounter) == true){
        questionText.append(questionArr[0]);
    }else{
        questionText.append(questionArr[1]);
    }
}

//putting the answer choice buttons into js
var choiceOne = document.querySelector(".choice-one");
var choiceTwo = document.querySelector(".choice-two");
var choiceThree = document.querySelector(".choice-three");
var choiceFour = document.querySelector(".choice-four");

//function to assign an answer to the four answer choice buttons
function answerChoiceButtons(){
    var randAnswer;

    let randColor = createHexaColor();

    //pick random button to put the color answer into
    let randNum = Math.floor(Math.random() * 4);
    
    if(randNum == 0){
        randAnswer = choiceOne;
    }else if(randNum == 1){
        randAnswer = choiceTwo;
    }else if(randNum == 2){
        randAnswer = choiceThree;
    }else{
        randAnswer = choiceFour;
    }

    choiceOne.innerHTML = "a)";
    choiceTwo.innerHTML = "b)";
    choiceThree.innerHTML = "c)";
    choiceFour.innerHTML = "d)";

    randAnswer.append(" " + randColor);

    //fill in the other choices with random hexadecimal
}

//create a second hexadecimal generator that will fill the remaining three answer choices

function hexGenerator(){
    var hex = Math.floor(Math.random() * 0xFFFFFF << 0).toString(16);
    hex = '#' + hex;

    if(hex < 7){
        hexGenerator();
    }

    return(hex);
}

//detect and fill the remaining answer buttons
function fillAnswers(){
    if(choiceOne.innerHTML == "a)"){
        choiceOne.append(hexGenerator());
    }

    if(choiceTwo.innerHTML == "b)"){
        choiceTwo.append(hexGenerator());
    }

    if(choiceThree.innerHTML == "c)"){
        choiceThree.append(hexGenerator());
    }

    if(choiceFour.innerHTML == "d)"){
        choiceFour.append(hexGenerator());
    }
}