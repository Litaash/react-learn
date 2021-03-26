import React from 'react';

import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id}>
        <TodoListItem
          label={ item.label }
          important={ item.important }
          /* { ...item } */
        />
      </li>
    )
  });

  return (
    <ul>
      { elements }
    </ul>
  )
}

export default TodoList;