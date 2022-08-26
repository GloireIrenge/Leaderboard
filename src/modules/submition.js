import MyScores from './allScores.js';

const submition = document.querySelector('.Forms');

const FormData = (container, scores) => {
  const obj = {
    name: submition[0].value,
    score: submition[1].value,
  };
  submition[0].value = '';
  submition[1].value = '';
  scores.push(obj);
  localStorage.setItem('scores', JSON.stringify(scores));
  MyScores(scores, container);
};

export default FormData;