import { question } from './question.js';

console.log(question)

let currentQuestionIndex = 0;

// Function to display the current question
function displayCurrentQuestion() {
    const questionContainer = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const expectedResult = document.getElementById('expected-result')
    const result = document.getElementById('result')
    const nextButton = document.getElementById('next_question')
    const answerForm = document.getElementById('answer_form')
    const dataElement = document.getElementById('data');

    const currentQuestion = question[currentQuestionIndex]

    questionElement.textContent = currentQuestion.question

    expectedResult.textContent = `${JSON.stringify(currentQuestion.expected_result)}`

     
     dataElement.textContent = `${JSON.stringify(currentQuestion.data)}`;

    answerForm.reset()
    result.textContent = ''

    nextButton.style.display = 'none'
}

function handleAnswerSubmit(event) {
    event.preventDefault()

    const userAnswer = document.getElementById('user_answer').value
    const currentQuestion = question[currentQuestionIndex]

    const result = document.getElementById('result')
    const nextButton = document.getElementById('next_question')

    try {
        
        const userSolution = new Function('data', `return ${userAnswer}`)(currentQuestion.data)

        if (JSON.stringify(userSolution) === JSON.stringify(currentQuestion.expected_result)) {
            result.textContent = 'You are right!'
            result.style.color = 'green'
        } else {
            result.textContent = 'You are false'
            result.style.color = 'red'
        }

        nextButton.style.display = 'inline-block'

    } catch (error) {
        result.textContent = 'Syntax error';
        result.style.color = 'red';
        
    }
}

// Function to move to the next question
function goToNextQuestion(){
    currentQuestionIndex++
    if (currentQuestionIndex < question.length) {
        displayCurrentQuestion()
    } else {
        alert('no more question')
    }
}

// Initialization
document.getElementById('answer_form').addEventListener('submit', handleAnswerSubmit);
document.getElementById('next_question').addEventListener('click', goToNextQuestion);

// First question
displayCurrentQuestion();