var colorGeneratorCounter = 0;

//generates a random color from a number
function colorGenerator(){
    var colorContainer = document.querySelector(".color-container");
    var colorArr = ["red","orange","yellow","green","blue","indigo","violet"];
    var rng = Math.floor(Math.random() * 6);

    var assignColor = colorArr[rng];

    colorContainer.style.backgroundColor = assignColor;

    colorGeneratorCounter = colorGeneratorCounter + 1;
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

    if(evenOrOdd(colorGeneratorCounter) == true){
        console.log("hello");
    }else{
        console.log("world ");
    }
}