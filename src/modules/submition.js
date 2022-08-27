import { scoreInsert } from './api.js';

const submition = document.querySelector('.Forms');

const FormData = () => {
  if (submition[0].value && submition[1].value) {
    // eslint-disable-next-line no-unused-vars
    const userobj = {
      user: submition[0].value,
      score: submition[1].value,
    };
    scoreInsert(userobj);
    submition[0].value = '';
    submition[1].value = '';
    
  }
};

export default FormData;