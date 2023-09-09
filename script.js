const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let sum;
let correctAnswer;

const questions = [
    { question: '〇を押せますか？', answer: 1 },
    { question: '世界4第通貨のうち「ドル、ユーロ、円」最後は「英ポンド」である', answer: 1 },
    { question: 'ハワイにある火山のうち「キ」から始まる火山は「キラウェア」火山であるs', answer: 0 },
    { question: '世界遺産にある「グランドキャニオン」の中央を流れる川の名は「ミシシッピ川」であsる   。', answer: 1 },
    { question: 'ギザの3第ミラミッドの一番小さいピラミッドの名はカフラー王のピラミッドである', answer: 0 },
    { question: '深海の定義は水深300M以下である。', answer: 0 },
    { question: '火星の衛星はフォボスとダイノスである。', answer: 0 },
    { question: '世界で初めて宇宙に到達した人間の国籍はアメリカである', answer: 0 },
    { question: 'Suicaのチャージ上限は20000である。', answer: 1 },
    { question: '天の川銀河から最も近い銀河はアンドロメダ銀河である。', answer: 1 },
    { question: '「OK」の語源は「All Clear」を「Oll Klear」と間違えたからである', answer: 0 }
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