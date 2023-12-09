const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'Question1', answer: 1 , hintcontent: '答えは1' },
    { question: 'Question2', answer: 2 , hintcontent: '答えは2' },
    { question: 'Question3', answer: 3 , hintcontent: '答えは3' },
    { question: 'Question1', answer: 4 , hintcontent: '答えは4' },
    { question: 'Question1', answer: 0 , hintcontent: '答えは' },
    { question: 'Question1', answer: 0 , hintcontent: '答えは' },
    { question: 'Question1', answer: 0 , hintcontent: '答えは' },
    { question: 'Question1', answer: 0 , hintcontent: '答えは' },
    { question: 'Question1', answer: 1 , hintcontent: '答えは' },
    { question: 'Question1', answer: 1 , hintcontent: '答えは' },
    { question: 'Question1', answer: 0 , hintcontent: '答えは' }
];

function writeQuestion() {
    console.log(titleText)
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
        location.href='result_trash.html?correctAnswer=' + correctAnswer
        document.getElementsByClassName('quizresult')[0].textContent = (`${questions.length}問中${correctAnswer}問正解です`)
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