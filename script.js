const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let sum;
let correctAnswer;

const questions = [
    { question: 'Question1', answer: 1 },
    { question: 'Question1', answer: 1 },
    { question: 'Question1', answer: 0 },
    { question: 'Question1', answer: 1 },
    { question: 'Question1', answer: 0 },
    { question: 'Question1', answer: 0 },
    { question: 'Question1', answer: 0 },
    { question: 'Question1', answer: 0 },
    { question: 'Question1', answer: 1 },
    { question: 'Question1', answer: 1 },
    { question: 'Question1', answer: 0 }
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
    }

    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}



onStart();