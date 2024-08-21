import { useCallback, useState, useEffect, useRef } from 'react';
import Checkbox from './Components/Checkbox';
import RangeInput from './Components/RangeInput';
import TextInput from './Components/TextInput';
import './App.css';

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
      passwordRef.current?.select(); // this shows highlighter on selected text
      passwordRef.current?.setSelectionRange(0, 32);  // selection range
      window.navigator.clipboard.writeText(password); // this is for copying
      console.log("Copied:", password);
    }
  }, [password]);

  return (
    <>
      <div className="container">
        <h1 className="header">Password Generator</h1>
        
        <TextInput
          id="passwordInput"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        &nbsp; &nbsp;
        <button onClick={copyPassword}>Copy</button>

        <RangeInput
          id="lengthRange"
          min={8}
          max={32}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <Checkbox
          id="numberInput"
          label="Numbers"
          checked={includeNum}
          onChange={() => setIncludeNum(prev => !prev)}
        />

        <Checkbox
          id="capitalInput"
          label="Capital Letters"
          checked={includeCaps}
          onChange={() => setIncludeCaps(prev => !prev)}
        />

        <Checkbox
          id="specialCharsInput"
          label="Special Chars"
          checked={includeSpecialCharacter}
          onChange={() => setIncludeSpecialCharacter(prev => !prev)}
        />
      </div>
    </>
  );
}

export default App;
