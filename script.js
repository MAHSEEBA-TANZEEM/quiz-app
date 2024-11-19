const questions = [ 
    { 
        question: "What is the capital of France?", 
        answers: [ 
            { text: "Berlin", correct: false }, 
            { text: "Madrid", correct: false }, 
            { text: "Paris", correct: true }, 
            { text: "Rome", correct: false } 
        ] 
    }, 
    { 
        question: "Who wrote 'To Kill a Mockingbird'?", 
        answers: [ 
            { text: "Harper Lee", correct: true }, 
            { text: "Mark Twain", correct: false }, 
            { text: "Ernest Hemingway", correct: false }, 
            { text: "F. Scott Fitzgerald", correct: false } 
        ] 
    }, 
    { 
        question: "What is the smallest planet in our solar system?", 
        answers: [ 
            { text: "Earth", correct: false }, 
            { text: "Mars", correct: false }, 
            { text: "Mercury", correct: true }, 
            { text: "Venus", correct: false } 
        ] 
    } 
]; 
let currentQuestionIndex = 0; 

function showQuestion(question) { 
    const questionContainer = document.getElementById('question-container'); 
    questionContainer.innerHTML = `<h2>${question.question}</h2>`; 
    question.answers.forEach(answer => { 
        const button = document.createElement('button'); 
        button.innerText = answer.text; 
        button.classList.add('btn'); 
        button.addEventListener('click', () => selectAnswer(answer)); 
        questionContainer.appendChild(button); 
    }); 
} 

function selectAnswer(answer) { 
    const buttons = document.querySelectorAll('.btn'); 
    buttons.forEach(button => { 
        button.disabled = true; 
        if (answer.correct) { 
            button.style.backgroundColor = 'green'; 
        } else { 
            button.style.backgroundColor = 'red'; 
        } 
    }); 
} 

function nextQuestion() { 
    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) { 
        showQuestion(questions[currentQuestionIndex]); 
    } else { 
        document.getElementById('question-container').innerHTML = '<h2>Quiz Completed!</h2>'; 
        document.getElementById('next-btn').style.display = 'none'; 
    } 
} 

document.addEventListener('DOMContentLoaded', () => { 
    showQuestion(questions[currentQuestionIndex]); 
});