var colorGeneratorCounter = 0;
var prevRng;

/*
//generates a random color from a number
function colorGenerator(){
    var colorContainer = document.querySelector(".color-container");
    var colorArr = ["","","","","","","","","","","","","","","","","","","","","","","","","",""];
    var rng = Math.floor(Math.random() * 6);
    //make a if statement to make sure that colors are not repeated
    if(rng == prevRng){
        while(rng == prevRng){
            rng = Math.floor(Math.random() * 6)
        }
    }
    console.log(rng);

    var assignColor = colorArr[rng];

    colorContainer.style.backgroundColor = assignColor;

    colorGeneratorCounter = colorGeneratorCounter + 1;
    prevRng = rng;
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
*/

function colorGenerator(){
    var colorContainer = document.querySelector(".color-container"); //color-container from the html css

    var maxColorVal = 0xFFFFFF; //16777215
    var randomNumber = Math.floor(Math.random() * maxColorVal);
    randomNumber = randomNumber.toString(16);
    randColor = randomNumber.padStart(6,0);
    randColor = `#${randColor.toUpperCase()}`;

    console.log(randColor);
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