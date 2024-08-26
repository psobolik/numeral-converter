import {useRef, useState} from 'react'
import './App.css'
import Converter from "./Converter.ts";

function App() {
  const [romanNumeralInput, setRomanNumeralInput] = useState<string>("");
  const [arabicNumeralInput, setArabicNumeralInput] = useState<string>("");

  const romanNumeralInputReference = useRef<HTMLInputElement>(null);
  const arabicNumeralInputReference = useRef<HTMLInputElement>(null);

  const onRomanKeyUp = () => {
    const arabic = Converter.romanToArabic(romanNumeralInput);
    setArabicNumeralInput(arabic ? arabic.toString() : "Invalid Roman Number");
  }
  const onArabicKeyUp = () => {
    const roman = Converter.arabicToRoman(Number(arabicNumeralInput));
    setRomanNumeralInput(roman ? roman : "Invalid Arabic Number");
  }

  const onClear = () => {
    setArabicNumeralInput("");
    setRomanNumeralInput("");
  }

  return (
    <div className={"container"}>
      <p>
        Enter a number in one box to see its alternative representation in the other.<br/>
        (Upper limit: 3999/MMMCMXCIX)
      </p>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div className={"container"}>
          <label htmlFor={"roman"}>Arabic Numerals</label>
          <input id="arabic"
                 ref={arabicNumeralInputReference}
                 title="Arabic Numeral"
                 value={arabicNumeralInput}
                 onKeyUp={onArabicKeyUp}
                 onChange={e => setArabicNumeralInput(e.target.value)}
          />
        </div>
        <div className={"container"}>
          <label htmlFor={"roman"}>Roman Numerals</label>
          <input id="roman"
                 ref={romanNumeralInputReference}
                 title="Roman Numeral"
                 value={romanNumeralInput}
                 onKeyUp={onRomanKeyUp}
                 onChange={e => setRomanNumeralInput(e.target.value.toUpperCase())}
          />
        </div>
      </div>
      <button onClick={onClear}>Clear</button>
    </div>
  )
}

export default App
