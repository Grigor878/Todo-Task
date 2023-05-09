import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TodoList from './components/todo/TodoList';
import TodoFrom from './components/todo/TodoFrom';
import { addTodo, deleteTodo, updateTodo, toggleCompleted } from './components/store/store';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    // You can use this useEffect hook to fetch data from a server or do other initialization logic
  }, []);

  const handleAddTodo = ({ title, description, deadline }) => {
    dispatch(addTodo({ title, description, deadline }));
  };

  const handleToggleCompleted = id => {
    dispatch(toggleCompleted(id));
  };

  const handleEdit = (id, { title, description, deadline }) => {
    dispatch(updateTodo({ id, title, description, deadline }));
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoFrom onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggleCompleted={handleToggleCompleted}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

