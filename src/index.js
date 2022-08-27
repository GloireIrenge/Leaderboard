import { scoreList } from './modules/api.js';
import FormData from './modules/submition.js';
import './index.css';

const reloader = document.querySelector('.reload');
reloader.addEventListener('click', () => {
  scoreList();
});

const SubmitForm = document.querySelector('.submit');
SubmitForm.addEventListener('click', (e) => {
  e.preventDefault();
  FormData();
});

scoreList();