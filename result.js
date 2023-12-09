const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const correctAnswer = urlParams.get('correctAnswer');
const resultText = document.getElementsByClassName('resultscreen');
resultText[0].textContent = `11問中` + correctAnswer + '問正解！！';

