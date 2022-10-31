


import {useState} from "react";
import Header from "./components/Header";
import Form from './components/Form';
import TodosList from "./components/TodosList";
import './App.css';

function App() {

  const [input, setInput] =  useState("");// keep track of user input
  const [todos, setTodos] = useState([]); //keep track of all todos list items
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos} 
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
