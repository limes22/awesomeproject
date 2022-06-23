import React from 'react';
import './App.css';
import Counter from './Counter';

const App: React.FC = () => {
  // let result = 0;
  const [result, setResult] = React.useState(0);
  const myOnChange = (e: any) => {
    const {value} = e.target;
    console.log(value);
    // result = value;
    setResult(value);
  };
  return (
    <>
      <input type ='text' onChange={myOnChange} />
      <Counter state = {result} />
    </>
  );
};

export default App;
