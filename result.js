const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const correctAnswer = urlParams.get('correctAnswer');

