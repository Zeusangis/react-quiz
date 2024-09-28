function NextButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="bth btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
export default NextButton;
