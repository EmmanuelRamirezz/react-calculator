
import './App.css';
import calcLogo from './assets/calcLogo.png';

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
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default App;
