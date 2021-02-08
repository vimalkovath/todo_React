import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import { TodoContext } from "./TodoContext";
import React, { useState } from 'react';
const initial=["abc","efg"]
// export const TodoContext = React.createContext();


function App() {
const [list, setList] = useState(initial)

  return (
    <div className="App">
       <TodoContext.Provider value={[list, setList]}>
      <Todo/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
