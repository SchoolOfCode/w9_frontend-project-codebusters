import "./DarkMode.css";

/* setting dark theme and storing it */
const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};
/* setting light mode and storing it */
const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};
/* get stored theme */
const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);
 
if (defaultDark) {
  setDark();
}

// 
const toggleTheme = e => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

const DarkMode = () =>{
    return(
        <div className ="toggle-theme-wrapper">
            <span>🌞</span>
            <label className = "toggle-theme" htmlFor ="checkbox">
                <input type="checkbox" id="checkbox" onChange={toggleTheme}/>
                
                <div className = "slider round"></div>
                </label>
                <span>🌘</span>
                </div>
    );
};

export default DarkMode;