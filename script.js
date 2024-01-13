const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'キリコのアビリティ1のスキル名は？', answer: 3 , hintcontent: '1,霧歩き|2,神変出没|3,神出鬼没|4,五里霧中' },
    { question: 'シグマのアビィティ2のスキルCTは？', answer: 2 , hintcontent: '1,8秒|2,10秒|3,12秒|4,14秒' },
    { question: 'リーパーのショットガンの名前は？', answer: 4 , hintcontent: '1,デス・ブルーム|2,デッドマンズ・ショットガン|3,R31ショットガン|4,ヘルファイアショットガン' },
    { question: 'イリオスはどこの国にある設定？', answer: 1 , hintcontent: '1,ギリシャ|2,イスラエル|3,エジプト|4,カナダ' },
    { question: 'ファラのアルティメットは秒間何ロケットが発射される？', answer: 2 , hintcontent: '1,25|2,30|3,50|4,200' },
    { question: 'ゼニヤッタのアルティメットの効果時間は？', answer: 3 , hintcontent: '1,5|2,5.5|3,6|4,7' },
    { question: 'オリーサのアルティメットから受けるスロー効果は？', answer: 3 , hintcontent: '1,15%|2,20%|3,30%|4,45%' },
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