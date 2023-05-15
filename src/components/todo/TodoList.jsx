import React from 'react';
import TodoItem from './TodoItem';
import './Styles.scss';

const TodoList = ({ todos, onToggleCompleted, onEditTodo, onDeleteTodo }) => {

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className='todolist'>
      {todos.length
        ? <p>Completed Items: {completedCount}</p>
        : null
      }
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={onToggleCompleted}
          onEdit={onEditTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
