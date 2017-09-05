var currentQuestion = 0;
var score = 0;
var totQuestion= questions.length;
var container = document.getElementById('c');
var quest = document.getElementById('questionss');
var opt1= document.getElementById('option1');
var opt2= document.getElementById('option2');
var opt3= document.getElementById('option3');
var opt4= document.getElementById('option4');
var nxtBt= document.getElementById('nextbutton');
var resultcnt= document.getElementById('results');


function loadQuestion (questindex) {
	var a= questions[questindex];
	quest.textContent = a["question"];
	opt1.textContent = a["option1"];
	opt2.textContent = a["option2"];
	opt3.textContent = a["option3"];
	opt4.textContent = a["option4"];
};

function loadNext() {
	var selectedoption =document.querySelector('input[type=radio]:checked');
	if(!selectedoption) {
		alert("answer toh de bhai :p");
		return;
	}
	var answer = selectedoption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedoption.checked= false;
	currentQuestion++;
    if(currentQuestion== totQuestion-1) {
    	nextbutton.textContent='Finish';

   }

    if(currentQuestion == totQuestion) {
    	container.style.display='none';
    	resultcnt.style.display= '';
    	nextbutton.style.display='none';
    	resultcnt.textContent ='your score: ' + score;
        

    }
     loadQuestion(currentQuestion);

} 
loadQuestion(currentQuestion);



window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the kittens!";
    }