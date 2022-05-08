import React from 'react';
import './App.css';
import {Counter} from "./study/Counter";
import {TodoList} from "./study/todoList";
import {Profile } from "./study/Profile";

const App = () => {
  return (
      <div className='App'>
        <Profile name='myName' gender='female' email='howdi2002@naver.com' phone='01012345678' />
          <Counter />
          <TodoList />
      </div>
  );
};
export default App;
