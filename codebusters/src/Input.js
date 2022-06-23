function Input({ text, handleChange }) {
    return (
          <input
          value={text}
          onChange={(e) => {
            handleChange(e.target.value);
          }} ></input>

    );
  }
  
  export default Input;