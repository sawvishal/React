import { useCallback, useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  //Generate Password
  const generatePassword = useCallback(() => {
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzlkjhgfdsaqwertyuiop";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //Copy password to clipboard
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  //Regenerarte on state change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-6 py-5 mt-10 bg-gray-900 text-orange-400">
      <h1 className="text-2xl font-bold text-white text-center mb-4">
        🔐 Password Generator
      </h1>
      {/* PAssword display and copy button */}
      <div className="flex shadow-inner rounded-lg overflow-hidden mb-5">
        <input
          type="text"
          value={password}
          className="flex-1 py-2 px-3 bg-white text-black font-mono text-sm outline-none"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition-all"
        >
          copy
        </button>
      </div>
      {/* Controls */}
      <div className="space-y-4 text-sm">
        {/* Length Slider */}
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="w-full cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="length"
          />
          <label htmlFor="length" className="text-white font-medium">
            Length: {length}
          </label>
        </div>
        {/* Include Numbers */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number" className="text-white">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number" className="text-white">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
