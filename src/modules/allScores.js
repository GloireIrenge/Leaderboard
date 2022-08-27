const MyScores = (OneScores, container) => {
  container.innerHTML = '';
  OneScores.forEach((obj, i) => {
    container.innerHTML += `<li dataid=${i}>${obj.user}: ${obj.score}</li>`;
  });
};

export default MyScores;