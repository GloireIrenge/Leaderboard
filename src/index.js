import fetch from './modules/localStorage.js';
import MyScores from './modules/allScores.js';
import FormData from './modules/submition.js';
import './index.css';

const block = document.querySelector('.ScoreList');
const reloader = document.querySelector('.reload');
reloader.addEventListener('click', () => {
  document.location.reload();
});

const Myscores = fetch();
MyScores(Myscores, block);

const SubmitForm = document.querySelector('.submit');
SubmitForm.addEventListener('click', (e) => {
  e.preventDefault();
  FormData(block, Myscores);
});