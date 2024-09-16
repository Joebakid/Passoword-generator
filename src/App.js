import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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

    // Password generation logic
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  }

  function handleCopyPassword() {
    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopySuccess("Password copied to clipboard!");
          setTimeout(() => setCopySuccess(""), 2000); // Clears message after 2 seconds
        })
        .catch((err) => {
          setCopySuccess("Failed to copy password");
          console.error("Failed to copy password: ", err);
        });
    } else {
      setCopySuccess("No password to copy");
    }
  }

  // Save password and name to a .txt file
  function handleSaveToFile() {
    if (name && password) {
      const fileContent = `Name: ${name}\nPassword: ${password}`;
      const blob = new Blob([fileContent], { type: "text/plain" });
      const fileUrl = URL.createObjectURL(blob);

      // Create a temporary <a> element to trigger the download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = `${name}_password.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("Please generate a password and provide a name before saving.");
    }
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>

      {/* Input field for Name */}
      <div className="flex m-y">
        <label>Name: </label>
        <input
          className="m-x"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name for the password"
        />
      </div>

      {/* Input field for Length */}
      <div className="flex m-y">
        <label>Password Length: </label>
        <input
          className="m-x"
          type="number"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value, 10) || "")}
        />
      </div>

      {/* Checkbox for Include Numbers */}
      <div className="flex m-y">
        <label>Include Numbers: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumber(e.target.checked)}
        />
      </div>

      {/* Checkbox for Include Symbols */}
      <div className="flex m-y">
        <label>Include Symbols: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>

      {/* Checkbox for Include Uppercase Letters */}
      <div className="flex m-y">
        <label>Include Uppercase Letters: </label>
        <input
          type="checkbox"
          className="m-x"
          checked={includeUpperCase}
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
      </div>

      {/* Button to Generate Password */}
      <button onClick={handleGeneratePassword} className="btn">
        Generate Password
      </button>

      {/* Display Generated Password */}
      {password && (
        <>
          <p>Password: {password}</p>

          {/* Button to Copy Password */}
          <button onClick={handleCopyPassword} className="btn">
            Copy Password
          </button>

          {/* Button to Save to .txt File */}
          <button onClick={handleSaveToFile} className="btn m-y">
            Save to .txt
          </button>
        </>
      )}

      {/* Feedback message for copy success/failure */}
      {copySuccess && <p>{copySuccess}</p>}
    </div>
  );
}

export default App;
