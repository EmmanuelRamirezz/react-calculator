
import './App.css';
import calcLogo from './assets/calcLogo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';
import {useState} from 'react';


function App() {
  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val);
  };

  return (
    <div className='App'>
      <div className='calc-logo--container'>
      <img
      src={calcLogo}
      className='calc-logo'
      alt = 'Calculatos logo' />
      </div>

      <div className='calculator-container'>
        <Screen
        //props
        input={input} 
        />
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          {/* no se pasan parentecis al pasar la funcion como prop. (en este caso) */}
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearBtn clickHandler={() => setInput('')}>
            Clear
          </ClearBtn>
          {/* Tambien podemos enviar una arrow function como prop si es simple y corta */}
        </div>
      </div>
    </div>
  );
}

export default App;
