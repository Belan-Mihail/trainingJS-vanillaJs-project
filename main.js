import { question } from './question.js';



let currentQuestion = null; 


function displayRandomQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const expectedResult = document.getElementById('expected-result');
    const result = document.getElementById('result');
    const nextButton = document.getElementById('next_question');
    const answerForm = document.getElementById('answer_form');
    const dataElement = document.getElementById('data');
    const availableQuestions = document.getElementById('available-questions')

    
    const randomIndex = Math.floor(Math.random() * question.length);

    
    currentQuestion = question[randomIndex]; 

    
    questionElement.textContent = currentQuestion.question;
    availableQuestions.textContent = question.length
    expectedResult.textContent = `${JSON.stringify(currentQuestion.expected_result)}`;
    dataElement.textContent = `${JSON.stringify(currentQuestion.data)}`;

    
    answerForm.reset();
    result.textContent = '';

    
    nextButton.style.display = 'none';

    
    question.splice(randomIndex, 1); 
}


function handleAnswerSubmit(event) {
    event.preventDefault();

    if (!currentQuestion) {
        return;
    }

    const userAnswer = document.getElementById('user_answer').value.trim(); 
    const result = document.getElementById('result');
    const nextButton = document.getElementById('next_question');

    
    const correctSolution = currentQuestion.solution.trim(); 

    if (userAnswer === correctSolution) {
        result.textContent = 'You are right!';
        result.style.color = 'green';
    } else {
        setTimeout(() => {
            result.textContent = currentQuestion.solution;
            result.style.color = 'black';
        }, 1500);
        result.textContent = 'You are false';
        result.style.color = 'red';
    }

    nextButton.style.display = 'inline-block';
    nextButton.classList.add('next');
}



function goToNextQuestion() {
    
    if (question.length > 0) {
        displayRandomQuestion();
    } else {
        alert('No more questions!');
    }
}


document.getElementById('answer_form').addEventListener('submit', handleAnswerSubmit);
document.getElementById('next_question').addEventListener('click', goToNextQuestion);


displayRandomQuestion();
