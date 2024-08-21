import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [includeNum, setIncludeNum] = useState(false);
  const [includeCaps, setIncludeCaps] = useState(false);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let charList = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    if (includeCaps) charList += charList.toUpperCase();
    if (includeNum) charList += "0123456789";
    if (includeSpecialCharacter) charList += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      password += charList.charAt(Math.floor(Math.random() * charList.length));
    }

    setPassword(password);
  }, [length, includeNum, includeCaps, includeSpecialCharacter]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNum, includeCaps, includeSpecialCharacter, generatePassword]);

  const copyPassword = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999); // For mobile devices
      window.navigator.clipboard.writeText(password);
      console.log("Copied:", password);
    }
  }, [password]);

  return (
    <>
      <div className="container">
        <h1 className="header">Password Generator</h1>
        <div className="input-group">
          <input
            type="text"
            id="passwordInput"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword}>Copy</button>
        </div>

        <div className="controls">
          <div className="control">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              id="lengthRange"
              style={{ cursor: 'pointer' }}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="lengthRange">
              Length: <span id="lengthLabel"> {length}</span>
            </label>
          </div>

          <div className="control">
            <input
              type="checkbox"
              checked={includeNum}
              id="numberInput"
              onChange={() => setIncludeNum(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="control">
            <input
              type="checkbox"
              checked={includeCaps}
              id="capitalInput"
              onChange={() => setIncludeCaps(prev => !prev)}
            />
            <label htmlFor="capitalInput">Capital Letters</label>
          </div>

          <div className="control">
            <input
              type="checkbox"
              checked={includeSpecialCharacter}
              id="specialCharsInput"
              onChange={() => setIncludeSpecialCharacter(prev => !prev)}
            />
            <label htmlFor="specialCharsInput">Special Chars</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
