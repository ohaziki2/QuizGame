const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const correctAnswer = urlParams.get('correctAnswer');
const resultText = document.getElementsByClassName('resultscreen');
const perfect = document.getElementsByClassName('perfect');
resultText[0].textContent = `10問中` + correctAnswer + '問正解！！';
