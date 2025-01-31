import { question } from './question.js';

let currentQuestionIndex = 0;

// Function to display the current question
function displayCurrentQuestion() {
    const questionContainer = document.getElementById('question-container')
    const questionElement = document.getElementById('question')
    const expectedResult = document.getElementById('expected-result')
    const result = document.qetElemantById('result')
    const nextButton = document.getElementById('next_question')
    const answerForm = document.getElementById('answer_form')

    const currentQuestion = question[currentQuestionIndex]

    questionElement.textContent = currentQuestion.question

    expectedResult.textContent = `${JSON.stringify(currentQuestion.expected)}`

    answerForm.reset()
    result.textContent = ''

    nextButton.style.display = 'none'
}

function handleAnswerSubmit(event) {
    event.preventDefault()

    const userAnswer = document.getElementById('user_answer').value
    const currentQuestion = question[currentQuestionIndex]

    const result = document.qetElemantById('result')
    const nextButton = document.getElementById('next_question')

    try {
        
        const userSolution = new Function('data', `return ${userAnswer}`)(currentQuestion.data)

        if (JSON.stringify(userSolution) === JSON.stringify(currentQuestion.expected)) {
            result.textContent = 'You are right!'
            result.style.color = 'green'
        } else {
            result.textContent = 'You are false'
            result.style.coloe = 'red'
        }

        nextButton.style.display = 'inline-block'

    } catch (error) {
        resultElement.textContent = 'Syntax error';
        resultElement.style.color = 'red';
        
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