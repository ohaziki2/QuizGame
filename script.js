const titleText = document.getElementById('title');
const questionText = document.getElementById('question');
const hint = document.getElementsByClassName('fukidashi')
let sum;
let correctAnswer;

const questions = [
    { question: 'スプリットの所在地(設定)は？', answer: 1 , hintcontent: 'ヨルが頻繁に訪れるらしい' , choise1: '日本', choise2: '韓国', choise3: 'シンガポール', choise4: 'アメリカ'},
    { question: 'ソーヴァの出身地は？', answer: 2 , hintcontent: 'ソーヴァはロシア語でフクロウらしい' , choise1: '日本', choise2: 'ロシア', choise3: 'フィンランド', choise4: 'デンマーク'},
    { question: 'フェイドは何を操る？', answer: 3 , hintcontent: 'アルティメットボイスを思い出そう' , choise1: '闇', choise2: '影', choise3: '悪夢', choise4: '墨'},
    { question: 'ブリーチの義手の製作者は？', answer: 4 , hintcontent: '彼のスキルに注目' , choise1: 'キルジョイ', choise2: 'ブリムストーン', choise3: 'チェンバー', choise4: 'レイズ'},
    { question: 'Kay/oのアルティメット名は？', answer: 3 , hintcontent: '広範囲のシステムを無効化..' , choise1: 'シャットダウン', choise2: 'EMP', choise3: 'ヌルコマンド', choise4: 'サプレッション'},
    { question: 'チェンバーの出身地は？', answer: 2 , hintcontent: 'ピック画面に表示される' , choise1: 'イタリア', choise2: 'フランス', choise3: 'オランダ', choise4: 'ベルギー'},
    { question: 'ゲッコーの青色のクリーチャーの名前は？', answer: 1 , hintcontent: 'スキル名が答え' , choise1: 'ディジー', choise2: 'デジー', choise3: 'ドゥジー', choise4: 'ディニー'},
    { question: 'Question8', answer: 0 , hintcontent: '' , choise1: '', choise2: '', choise3: '', choise4: ''},
    { question: 'ブリーチの義手', answer: 3 , hintcontent: 'Kingdom Area ' , choise1: '', choise2: '', choise3: '', choise4: ''},
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