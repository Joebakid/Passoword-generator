import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumber] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [copySuccess, setCopySuccess] = useState("");

  function handleGeneratePassword() {
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const uppercaseLetters = lowercaseLetters.toUpperCase();

    let characters = lowercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if (includeUpperCase) characters += uppercaseLetters;

    //Logic
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
      // console.log(randomIndex);
    }

    setPassword(generatedPassword);
  }

  function handleCopyPassword() {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          alert("Password copied to clipboard!");
          setTimeout(() => setCopySuccess(""), 2000); // Clears message after 2 seconds
        })
        .catch((err) => {
          setCopySuccess("Failed to copy password");
          alert("Failed to copy password: ", err);
        });
    } else {
      setCopySuccess("No password to copy");
    }
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>

      {/* Input field --Length*/}
      <div className="flex m-y ">
        <label>Password Length: </label>
        <input
          className="m-x"
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
      </div>

      {/* Input field --Include number*/}
      <div className="flex m-y ">
        <label>Include Numbers: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumber(e.target.checked)}
        ></input>
      </div>

      {/* Input field --Include symbols*/}
      <div className="flex m-y ">
        <label>Include Symbols: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        ></input>
      </div>

      {/* Input field --Include UpperCase*/}
      <div className="flex m-y ">
        <label>Include Uppercase Letters: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        ></input>
      </div>

      <button onClick={handleGeneratePassword} className="btn">
        Generate Password
      </button>

      <p>Password: {password}</p>

      <button onClick={handleCopyPassword} className="btn">
        Copy Password
      </button>

      {/* Feedback message for copy success/failure */}
      {copySuccess && <p>{copySuccess}</p>}
    </div>
  );
}

export default App;
