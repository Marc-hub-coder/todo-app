import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, updateTodo, removeTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(index, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}

      {!todo.completed && (
        <button
          className="complete-button"
          onClick={() => toggleComplete(index)}
          disabled={isEditing}
        >
          Complete
        </button>
      )}

      <button
        className="edit-button"
        onClick={handleEdit}
        disabled={todo.completed || isEditing}
      >
        Edit
      </button>

      <button
        className="delete-button"
        onClick={() => removeTodo(index)}
        disabled={todo.completed || isEditing}
      >
        Delete
      </button>

      {isEditing && (
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      )}
    </li>
  );
}

export default TodoItem;
