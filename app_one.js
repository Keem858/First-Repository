var colorGeneratorCounter = 0;
var prevRng;
var button = document.querySelector('.temp');
var hexBox; //holds the static hexadecimal to be used in other functions

var hexArrAnswer; //holds the hexadecimal answer array
//the three variables below this hold the hex value of the filler buttons
var hexArrFillerOne;
var hexArrFillerTwo;
var hexArrFillerThree;

var storeAnswerButton; //this will store the button the answer needs to be assigned to

//creates the hexadecimal and returns it
function hexGenerator(){
    var hex = Math.floor(Math.random() * 0xFFFFFF << 0).toString(16);
    hex = '#' + hex;

    if(hex < 7){
        hexGenerator();
    }

    hexBox = hex;
	return(hex);
}

//applies to the background and console and return the color it used
function colorGenerator(){
    var colorContainer = document.querySelector(".color-container"); //color-container from the html css

    let randomColor = hexBox;
    console.log("colorGenerator function: " + randomColor);

    colorContainer.style.backgroundColor = randomColor;

    colorGeneratorCounter++;
	
	hexArrAnswer = hexToArr(hexBox);
}

/**************************** THIS BOX DEALS WITH THE QUESTIONS***************************************/
//This box has to do with the questions


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

/**********************************************************************/

//these are the answer choice buttons
var choiceOne = document.querySelector(".choice-one");
var choiceTwo = document.querySelector(".choice-two");
var choiceThree = document.querySelector(".choice-three");
var choiceFour = document.querySelector(".choice-four");

//function to assign an ANSWER to the four answer choice buttons
function answerChoiceButtons(){
    var randAnswer;

    let randColor = hexBox;
	console.log("answerChoiceButton function: " + randColor);

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

    randAnswer.append(" " + randColor); //temp spaceing issue
	
	storeAnswerButton = randAnswer;
	return(randAnswer);
}

//detect and fill the remaining answer buttons
function fillAnswers(){
	//variables to store the filler answer hex's
	var choiceOneFiller = hexGenerator();
	var choiceTwoFiller = hexGenerator();
	var choiceThreeFiller = hexGenerator();
	var choiceFourFiller = hexGenerator();
	
	
    if(choiceOne.innerHTML.length < 9){
        choiceOne.append(" " + choiceOneFiller);
		hexArrFillerOne = hexToArr(choiceOneFiller);
    }

    if(choiceTwo.innerHTML.length < 9){
        choiceTwo.append(" " + choiceTwoFiller);
		hexArrFillerTwo = hexToArr(choiceTwoFiller);
    }

    if(choiceThree.innerHTML.length < 9){
        choiceThree.append(" " + choiceThreeFiller);
		hexArrFillerThree = hexToArr(choiceThreeFiller);
    }

    if(choiceFour.innerHTML.length < 9){
        choiceFour.append(" " + choiceFourFiller);
		hexArrFillerFour = hexToArr(choiceFourFiller);
    }
}

/***************************************THIS BOX HERE IS A LOT OF THE NEW CODE IM WORKING ON AT SCHOOL**************************************************/
//turn hexBox into an Array

function hexToArr(hexBox){
	var hexBoxArr = [];
	
	for(var i = 0; i < hexBox.length; i++){
		hexBoxArr.push(hexBox[i]);
	}
	
	console.log(hexBoxArr);
	return(hexBoxArr);
}

//turns the hex array passed through this into decimal
function hexToDec(arr){
	var red;
	var green;
	var blue;
	
	var newArr = [];
	
	//loop through the array and push the values into the new one
	for(var x = 1; x < arr.length; x++){
		if(arr[x] <= 9){
			newArr.push(arr[x]);
		}else if(arr[x] == 'a'){
			newArr.push(10);
		}else if(arr[x] == 'b'){
			newArr.push(11);
		}else if(arr[x] == 'c'){
			newArr.push(12);
		}else if(arr[x]== 'd'){
			newArr.push(13);
		}else if(arr[x] == 'e'){
			newArr.push(14);
		}else{
			newArr.push(15);
		}
	}
	
	console.log(newArr);
	
	// mult 0 and 1 for red. 2 and 3 for green. 4 and 5 for blue
	red = newArr[0] * newArr[1]
	green = newArr[2] * newArr[3]
	blue = newArr[4] * newArr[5]
	
	console.log("rgb(" + red + "," + green + "," + blue + ")");
	return("rgb(" + red + "," + green + "," + blue + ")");
}

//function that will create random rgb color codes and return it as a string "rgb(red,green,blue)"
function rgbGenerator(){
	var red;
	var green;
	var blue;
	
	red = Math.floor(Math.random() * 255).toString(10);
	green = Math.floor(Math.random() * 255).toString(10);
	blue = Math.floor(Math.random() * 255).toString(10);
	
	return("rgb(" + red + "," + green + "," + blue + ")");
}

// run this function only on odd values of colorGeneratorCounter. turn the inner html of the buttons into rgb using the above function / variable.
function changeInnerValues(){
	if(evenOrOdd(colorGeneratorCounter) == false){
		//make the inner html of the buttons a b c d
		choiceOne.innerHTML = "a) ";
		choiceTwo.innerHTML = "b) ";
		choiceThree.innerHTML = "c) ";
		choiceFour.innerHTML = "d) ";
		
		//append the inner html with the rgb answer
		storeAnswerButton.append(hexToDec(hexArrAnswer));
		
		//fill the rest with the random rgb color codes
		if(choiceOne.innerHTML.length < 5){
			choiceOne.append(" " + rgbGenerator());
		}

		if(choiceTwo.innerHTML.length < 5){
			choiceTwo.append(" " + rgbGenerator());
		}

		if(choiceThree.innerHTML.length < 5){
			choiceThree.append(" " + rgbGenerator());
		}

		if(choiceFour.innerHTML.length < 5){
			choiceFour.append(" " + rgbGenerator());
		}
	}
}

/* Next steps of this assignment
1. have the correct answer in the variable... This has already been done
2. look for the click of a button
3. if that click == the correct answer display correct
4. If it is incorrect display that is was incorrect AND what the correct answer was
5. the page needs to be refreshed after the correct/incorrect answer has been displayed
*/

//this function will handle reloading the page
/*
function reload(){
	setTimeout("location.reload(true);",2500);
}
*/

//this checks to see if the users click is correct or not
//when the user presses the correct answer add 1 to a counter... to do this I need to figure out when the user clicks the correct answer
var holdAnswer = answerChoiceButtons();

//this part of the program will also work with the correct and incorrect counters
//var for the respective containers
var correctCount = 0;
var incorrectCount = 0;
var correctContainer = document.querySelector('.correct-number-container');
var incorrectContainer = document.querySelector('.incorrect-number-container');

choiceOne.addEventListener('click', function(){
	if(choiceOne.innerHTML == storeAnswerButton.innerHTML){
		alert("correct!");
		correctCount++;
		correctContainer.innerHTML = correctCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}else{
		alert("incorrect! The correct answer was: " + storeAnswerButton.innerHTML);
		incorrectCount++;
		incorrectContainer.innerHTML = incorrectCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}
});

choiceTwo.addEventListener('click', function(){
	if(choiceTwo.innerHTML == storeAnswerButton.innerHTML){
		alert("correct!");
		correctCount++;
		correctContainer.innerHTML = correctCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}else{
		alert("incorrect! The correct answer was: " + storeAnswerButton.innerHTML);
		incorrectCount++;
		incorrectContainer.innerHTML = incorrectCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}
});

choiceThree.addEventListener('click', function(){
	if(choiceThree.innerHTML == storeAnswerButton.innerHTML){
		alert("correct!");
		correctCount++;
		correctContainer.innerHTML = correctCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}else{
		alert("incorrect! The correct answer was: " + storeAnswerButton.innerHTML);
		incorrectCount++;
		incorrectContainer.innerHTML = incorrectCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}
});

choiceFour.addEventListener('click', function(){
	if(choiceFour.innerHTML == storeAnswerButton.innerHTML){
		alert("correct!");
		correctCount++;
		correctContainer.innerHTML = correctCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}else{
		alert("incorrect! The correct answer was: " + storeAnswerButton.innerHTML);
		incorrectCount++;
		incorrectContainer.innerHTML = incorrectCount.toString(10);
		setTimeout(hexGenerator(), colorGenerator(), generateQuestion(), answerChoiceButtons(), fillAnswers(), changeInnerValues());
	}
});