const QnA = ({ qna, showAns, handleQna }) => {
  return (
    <div className="qna">
      {qna.question}
      <span onClick={() => handleQna()}>{showAns ? '-' : '+'}</span>
      {showAns && <hr />}
      {showAns && qna.answer}
    </div>
  );
};

export default QnA;
