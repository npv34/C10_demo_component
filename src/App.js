import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

function App() {
  const [number, setNumber] = useState(100)

  const upNumber = () => {
    setNumber(number + 1)
  }

  const downNumber = () => {
    setNumber(number - 1);
  }
  return (
     <>
      <Counter value={number} changeNumber={upNumber} downNumber={downNumber}/>
     </>
  );
}

export default App;
