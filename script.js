const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'Question1', answer: 1 , hintcontent: '' },
    { question: 'Question2', answer: 2 , hintcontent: '' },
    { question: 'Question3', answer: 3 , hintcontent: '' },
    { question: 'Question4', answer: 4 , hintcontent: '' },
    { question: 'Question5', answer: 0 , hintcontent: '' },
    { question: 'Question6', answer: 0 , hintcontent: '' },
    { question: 'Question7', answer: 0 , hintcontent: '' },
    { question: 'Question8', answer: 0 , hintcontent: '' },
    { question: 'Question9', answer: 1 , hintcontent: '' },
    { question: 'Question10', answer: 1 , hintcontent: '' },
    { question: 'Question11', answer: 0 , hintcontent: '' }
];
//questionには問題、answerには答えの番号、hintcontentは選択肢等を書いて
//例{ question: '赤い果物は？', answer: 1 , hintcontent: '1, リンゴ 2,バナナ 3,ブドウ 4,オレンジ' },
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