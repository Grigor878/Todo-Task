import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo, toggleCompleted } from '../../store/slices/todoSclice';
import TodoForm from './TodoFrom';
import TodoList from './TodoList';

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleToggleCompleted = id => {
        dispatch(toggleCompleted(id));
    };

    const handleEditTodo = (id, { title, description, deadline }) => {
        dispatch(updateTodo({
            id,
            title,
            description,
            deadline,
        }));
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };
    return (
        <div>
            <TodoForm />
         
            <TodoList
                todos={todos}
                onToggleCompleted={handleToggleCompleted}
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    )
}

export default Todo