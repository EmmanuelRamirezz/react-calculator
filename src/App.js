
import './App.css';
import calcLogo from './assets/calcLogo.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearBtn from './components/ClearBtn';


function App() {
  return (
    <div className='App'>
      <div className='calc-logo--container'>
      <img
      src={calcLogo}
      className='calc-logo'
      alt = 'Calculatos logo' />
      </div>

      <div className='calculator-container'>
        <Screen/>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
        <div className='row'>
          <ClearBtn>Clear</ClearBtn>
        </div>
      </div>
    </div>
  );
}

export default App;
