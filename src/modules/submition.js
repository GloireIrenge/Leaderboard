import { scoreInsert } from './api.js';

const submition = document.querySelector('.Forms');

const FormData = () => {
  if (submition[0].value && submition[1].value) {
    // eslint-disable-next-line no-unused-vars
    const obj = {
      name: submition[0].value,
      score: submition[1].value,
    };
    submition[0].value = '';
    submition[1].value = '';
    scoreInsert();
  }
};

export default FormData;