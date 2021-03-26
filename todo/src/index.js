import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const TodoData = [
    { label: 'Drink Cofee', important: false , id: 0},
    { label: 'Make Awesome App', important: true, id: 1 },
    { label: 'Have a lunch', important: false, id: 2 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ TodoData } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));