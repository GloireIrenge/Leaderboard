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
        name: 'mufucoding',
      },
    ),
  });

};

const scoreInsert = async (o) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ow8Qqz9qnLnzWIgYozya/scores/', {
    method: 'POST',
    body: JSON.stringify(o),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
   
  });
};

const container = document.querySelector('.ScoreList');

const scoreList = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ow8Qqz9qnLnzWIgYozya/scores/', {
    method: 'GET',
  });
  const data = await response.json();
  MyScores(data.result, container);
};

export { fetchData, scoreInsert, scoreList };