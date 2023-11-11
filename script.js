const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'Question1', answer: 1 , hintcontent: 'bone' },
    { question: 'Question2', answer: 1 , hintcontent: 'meat' },
    { question: 'Question3', answer: 0 , hintcontent: 'salt' },
    { question: 'Question1', answer: 1 , hintcontent: '1' },
    { question: 'Question1', answer: 0 , hintcontent: '1' },
    { question: 'Question1', answer: 0 , hintcontent: '1' },
    { question: 'Question1', answer: 0 , hintcontent: '1' },
    { question: 'Question1', answer: 0 , hintcontent: '1' },
    { question: 'Question1', answer: 1 , hintcontent: '1' },
    { question: 'Question1', answer: 1 , hintcontent: '1' },
    { question: 'Question1', answer: 0 , hintcontent: '1' }
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
    //hint[0].textContent = questions[sum].hintcontent;
    document.getElementsByClassName('fukidashi')[0].textContent = questions[sum].hintcontent;
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


window.onload = function(){
    onStart();
}