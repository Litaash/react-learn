import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'; 

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item; /* константа id не будет выводиться вместе с ...itemProps у ...itemProps останется только label, important свойства */
    return (
      <li key={id} className="list-group-item todo-group-item">
        <TodoListItem
          { ...itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    )
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}

export default TodoList;
