import React from "react";
import "./App.css";
import Asy from "./Asy";
import Asy2 from "./Asy2";
import Counter from "./Counter";

const App: React.FC = () => {
  // let result = 0;
  const [result, setResult] = React.useState(0);
  console.log('나는 app component');
  const myOnChange = (e: any) => {
    const { value } = e.target;
    console.log(value);
    // result = value;
    setResult(value);
  };
  const [isshow, setisShow] = React.useState(true);
  const myOnClick = () => {
    setisShow(!isshow);
  };

  return (
    <>
      <input type="text" onChange={myOnChange} />
      {isshow ? <Counter counterValue={result} /> : null}
      <button onClick={myOnClick}>on/off</button>
      <Asy />
      <Asy2 />
    </>
  );
};

export default App;
