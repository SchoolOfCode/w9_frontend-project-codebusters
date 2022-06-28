function Input({ text, userInput, clickToGetErrorByInput }) {
  return (
    <>
        <input
        value={text}
        className = "searchBox"
        type = "text"
        placeholder="Ask the Oracle"
        onChange={(e) => {
          userInput(e.target.value);
        }} >
        </input>

        <button onClick = {clickToGetErrorByInput} className="searchButton">Search</button>
    </>

  );
}

export default Input;