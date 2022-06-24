function Input({ text, handleChange }) {
  return (
        <input
        value={text}
        className = "searchBox"
        type = "text"
        placeholder="Ask the Oracle"
        onChange={(e) => {
          handleChange(e.target.value);
        }} ></input>

  );
}

export default Input;