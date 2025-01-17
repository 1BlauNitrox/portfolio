let questionElement = document.getElementById("question");
let answerElements = document.getElementsByClassName("answer");
let counter = document.getElementById("current-question");
let popup = document.getElementById("popup");

let image_container = document.getElementById("image-container");
let code_question = document.getElementById("img-question");
let code_img = document.getElementById("code-img");
let code_popup = document.getElementById("code-popup");

let currentQuestion;
let answeredQuesions = [];
let correctAnswers = 0;

let isLoading = false;

window.onload = function() {
    correctAnswers = 0;
    answeredQuesions = [];
    document.getElementById("questions-size").innerText = quizData.length;
    loadQuestion();
}

function loadQuestion() {
    isLoading = false;
    resetColors();
    //Quizz finished
    if(answeredQuesions.length === quizData.length) {
        popup.style.display = "flex";
        popup.querySelector("h4").innerText = `Du hast ${correctAnswers} von ${quizData.length} Fragen richtig beantwortet! (${Math.round(correctAnswers / quizData.length * 100)}%)`;
        return;
    }
    currentQuestion = chooseQuestion();
    while(answeredQuesions.includes(currentQuestion.index)) {
        currentQuestion = chooseQuestion();
    }
    counter.innerText = answeredQuesions.length + 1;
    displayQuestion(currentQuestion);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion(currentQuestion) {

    if(currentQuestion.hasOwnProperty('code')) {
        image_container.style.display = "flex";
        code_question.innerText = currentQuestion.question;
        code_img.src = "images/" + currentQuestion.src;

        questionElement.innerText = "";
    } else {
        image_container.style.display = "none";
        questionElement.innerText = currentQuestion.question;
    }

    const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].innerText = shuffledAnswers[i];
    }  
}

function chooseQuestion() {
    let randomIndex = Math.floor(Math.random() * quizData.length);
    let randomQuestion = quizData[randomIndex];
    return randomQuestion;
}

function checkAnswer(answer) {
    if(isLoading) return;
    if (answer.innerText !== currentQuestion.correctAnswer) {
        answer.style.backgroundColor = "#dd5353";
    } else {
        correctAnswers++;
    }
    
    for(let i = 0; i < answerElements.length; i++) {
        if (answerElements[i].innerText === currentQuestion.correctAnswer) {
            answerElements[i].style.backgroundColor = "#96db70";
        }
    }
    answeredQuesions.push(currentQuestion.index);
    isLoading = true;
    setTimeout(loadQuestion, 1000);
}

function resetColors() {
    for(let i = 0; i < answerElements.length; i++) {
        answerElements[i].style.backgroundColor = "#fff";
    }
}

function restart() {
    popup.style.display = "none";
    correctAnswers = 0;
    answeredQuesions = [];
    loadQuestion();
}