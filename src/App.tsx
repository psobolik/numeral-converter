import React from 'react'
import './App.css'
import icon from '/icon.svg'
import Converter from "./Converter.ts";

function App() {
  const [romanNumeralInput, setRomanNumeralInput] = React.useState<string>("");
  const [arabicNumeralInput, setArabicNumeralInput] = React.useState<string>("");

  const onClear = () => {
    setArabicNumeralInput("");
    setRomanNumeralInput("");
  }

  const onArabicInputChange = (value: string) => {
    setArabicNumeralInput(value)

    const roman = Converter.arabicToRoman(Number(value));
    setRomanNumeralInput(roman ? roman : "Invalid Arabic Number");
  }
  const onRomanInputChange = (value: string) => {
    const roman = value.toUpperCase();
    setRomanNumeralInput(roman)

    const arabic = Converter.romanToArabic(roman);
    setArabicNumeralInput(arabic ? arabic.toString() : "Invalid Roman Number");
  }

  return (
    <div className={"container"}>
      <img src={icon} alt="logo"/>
      <p>
        Enter a number in one box to see its alternative representation in the other.<br/>
        (Upper limit: 3999/MMMCMXCIX)
      </p>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <div className={"container"}>
          <label htmlFor={"roman"}>Arabic Numerals</label>
          <input id="arabic"
                 title="Arabic Numeral"
                 value={arabicNumeralInput}
                 onChange={e => onArabicInputChange(e.target.value)}
          />
        </div>
        <div className={"container"}>
          <label htmlFor={"roman"}>Roman Numerals</label>
          <input id="roman"
                 title="Roman Numeral"
                 value={romanNumeralInput}
                 onChange={e => onRomanInputChange(e.target.value)}
          />
        </div>
      </div>
      <button onClick={onClear}>Clear</button>
      <p><a href={"https://github.com/psobolik/numeral-converter"}>Source</a></p>
    </div>
  )
}

export default App
