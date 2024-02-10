const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'Question1', answer: 1 , hintcontent: '' , choise1: 'a', choise2: 'i', choise3: 'u', choise4: 'e'},
    { question: 'Question2', answer: 2 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question3', answer: 3 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question4', answer: 4 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question5', answer: 0 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question6', answer: 0 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question7', answer: 0 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question8', answer: 0 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question9', answer: 1 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'Question1', answer: 1 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
] 
//questionには問題、answerには答えの番号、hintcontentはヒントを書いて
//例{ question: '赤い果物は？', answer: 1 , hintcontent: '1, リンゴ 2,バナナ 3,ブドウ 4,オレンジ' },
function writeQuestion() {
    console.log(titleText)
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
    //hint[0].textContent = questions[sum].hintcontent;
    document.getElementsByClassName('fukidashi')[0].textContent = questions[sum].hintcontent;
    document.getElementsByClassName('info1')[0].textContent = questions[sum].choise1
    document.getElementsByClassName('info2')[0].textContent = questions[sum].choise2
    document.getElementsByClassName('info3')[0].textContent = questions[sum].choise3
    document.getElementsByClassName('info4')[0].textContent = questions[sum].choise4
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