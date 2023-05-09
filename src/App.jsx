import React from 'react'
import "./App.scss";
import TodoFrom from './components/todo/TodoFrom';
import TodoItem from './components/todo/TodoItem';
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <>
      <TodoFrom />
      <TodoItem />
      <TodoList />
    </>
  );
}

export default App;

