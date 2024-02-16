
import { useState } from 'react';
import './App.css';
function App() {
  const[input,setInput]=useState("");
  const[result,setResult]=useState(0);
  const handler=(e)=>{
  setInput(e.target.value)
}
  return (
    <div className="container">
      <center>
       
      </center>
      <div className="calculator">
      <input type="text" value={input} name="input" onChange={handler} className="input-field"></input>
        <br></br>
        <button onClick={()=>setResult(eval(input))} className="result">Result</button>
        <h4>Result is {result}</h4>
        <div className="button-grid">
        <button onClick={()=>setInput(input+'1')} className="button">1</button>
        <button onClick={()=>setInput(input+'2')} className="button">2</button>
        <button onClick={()=>setInput(input+'3')} className="button">3</button>
        <button onClick={()=>setInput(input+'4')} className="button">4</button>
        <button onClick={()=>setInput(input+'5')} className="button">5</button>
        <button onClick={()=>setInput(input+'6')} className="button">6</button>
        <button onClick={()=>setInput(input+'7')} className="button">7</button>
        <button onClick={()=>setInput(input+'8')} className="button">8</button>
        <button onClick={()=>setInput(input+'9')} className="button">9</button>
        <button onClick={()=>setInput(input+'0')} className="button">0</button>
        <button onClick={()=>setInput(input+'+')} className="button">+</button>
        <button onClick={()=>setInput(input+'-')} className="button">-</button>
        <button onClick={()=>setInput(input+'*')} className="button">*</button>
        <button onClick={()=>setInput(input+'/')} className="button">/</button>
        <button onClick={()=>setInput('')} className="button">clr</button>
        </div>
      </div>
    </div>
  );
}

export default App;
