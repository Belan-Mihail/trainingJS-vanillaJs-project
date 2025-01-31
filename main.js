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
}