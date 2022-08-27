import MyScores from './allScores.js';

const fetchData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
        name: 'Jibambenacode',
      },
    ),
  });
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();
};

const scoreInsert = async (obj) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nnOBr2eapsi2r4jUDCrl/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
   // body: JSON.stringify(obj),
  });
  // eslint-disable-next-line no-unused-vars
  const data = await response.json();
};

const container = document.querySelector('.ScoreList');

const scoreList = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nnOBr2eapsi2r4jUDCrl/scores/', {
    method: 'GET',
  });
  const data = await response.json();
  MyScores(data.result, container);
};

export { fetchData, scoreInsert, scoreList };