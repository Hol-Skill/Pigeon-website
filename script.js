// assign "0" to the "score" variable
/*
let score = 0

//assign the quiz elements to the quiz variable:
quiz = document.forms.Quiz.elements;


//Define function:
function checkAnswers() {
    let score = 10
    alert ("Well done, your score is " + score)
}
*/

function checkAnswers() {
    let score = 0
   
    quiz = document.forms.Quiz.elements;
    fname = quiz.fname.value;
    
    answer1 = quiz.dove.value;
    if (answer1 == "actually") {
        score = score + 1;
    }
    answer2 = quiz.baby.value;
    if (answer2 == "squabs") {
        score = score + 1;
    }
    answer3 = quiz.awards.value;
    if (answer3 == "32") {
        score = score+ 1;
    }
    alert ("Well done, " + fname + " your score is " + score);
}






