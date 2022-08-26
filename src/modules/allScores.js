const MyScores = (OneScores, container) => {
  container.innerHTML = '';
  OneScores.forEach((obj, i) => {
    container.innerHTML += `<li class="list-item" dataid=${i}>${obj.name}: ${obj.score}</li>`;
  });
};

export default MyScores;