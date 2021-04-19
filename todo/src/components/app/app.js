import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {
  maxId = 100;

  state = {
    TodoData: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({ TodoData }) => {
      const idx = TodoData.findIndex((el) => el.id === id);
      const newArray = [
        ...TodoData.slice(0, idx),
        ...TodoData.slice(idx + 1)
      ]

      return {
        TodoData: newArray
      }
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({TodoData}) => {
      const newArray = [
        ...TodoData,
        newItem
      ];

      return {
        TodoData: newArray
      }
    });
  };

  onToggleDone = (id) => {
    console.log('done ', id);
    this.setState(({ TodoData }) => {
      
    });
  };

  onToggleImportant = (id) => {
    console.log('important ', id);
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader todo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={ this.state.TodoData }
          onDeleted={ this.deleteItem }
          onToggleImportant={ this.onToggleImportant }
          onToggleDone={ this.onToggleDone }
        />
        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    )
  }
};