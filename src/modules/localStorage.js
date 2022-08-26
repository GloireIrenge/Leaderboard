const fetch = () => {
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  return scores;
};

export default fetch;