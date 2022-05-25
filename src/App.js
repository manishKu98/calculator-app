import { useState } from 'react';
import './App.css';


function App() {
  const[result, setResult] = useState("");

  const onButtonClick = (e) => {
    setResult(result.concat(e.target.name))
  }
  const clear = () => {
    setResult("")
  }
  const backspace = () => {
    setResult(result.slice(0, -1))
  }
  const calculate = () => {
    setResult(eval(result).toString())  
  }


  return (
      <div className='calculator'>
        <input type='text' value={result} />
        <button onClick={clear} id="clear" className='large-btn'>AC</button>
        <button onClick={backspace} id="backspace" >DEL</button>
        <button onClick={onButtonClick} name='/' className='symbol'>&divide;</button>
        <button onClick={onButtonClick} name="1">1</button>
        <button onClick={onButtonClick} name='2'>2</button>
        <button onClick={onButtonClick} name='3'>3</button>
        <button onClick={onButtonClick} name='*' className='symbol'>&times;</button>
        <button onClick={onButtonClick} name='4'>4</button>
        <button onClick={onButtonClick} name='5'>5</button>
        <button onClick={onButtonClick} name='6'>6</button>
        <button onClick={onButtonClick} name='+' className='symbol'>+</button>
        <button onClick={onButtonClick} name='7'>7</button>
        <button onClick={onButtonClick} name='8'>8</button>
        <button onClick={onButtonClick} name='9'>9</button>
        <button onClick={onButtonClick} name='-' className='symbol'>-</button>
        <button onClick={onButtonClick} name='.'>.</button>
        <button onClick={onButtonClick} name='0'>0</button>
        <button onClick={calculate} name='=' className='symbol large-btn'>=</button>
      </div>
  );
}

export default App;



