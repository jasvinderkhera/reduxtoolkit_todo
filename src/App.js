import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/todo';
import AddTodo from './components/addTodo';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit To do List</h1>
      <AddTodo/>
      <Todo/>
      
    </div>
  );
}

export default App;
