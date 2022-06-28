function Input({ text, userInput }) {
  return (
        <input
        value={text}
        className = "searchBox"
        type = "text"
        placeholder="Ask the Oracle"
        onChange={(e) => {
          userInput(e.target.value);
        }} >
        </input>

  );
}

export default Input;