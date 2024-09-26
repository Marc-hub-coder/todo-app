import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleUpdateTodo = (index, updatedText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 className="app-title">Todo List</h1>
      <div className="input-container">
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={handleAddTodo}>Add Todo</button>
      </div>

      {todos.length === 0 ? (
        <p className="no-todos">No todos available. Add a todo to get started!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              updateTodo={handleUpdateTodo}
              removeTodo={handleRemoveTodo}
              toggleComplete={handleToggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
