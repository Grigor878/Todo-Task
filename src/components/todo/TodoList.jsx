import React from 'react'
import './Styles.scss'

const TodoList = ({ todos, handleToggleCompleted, handleEdit, handleDelete }) => {
    return (
        <div className='todolist'>
            {todos?.map((todo) => {
                return (
                    <div
                        key={todo.index}
                        className={todo.completed ? 'todolist__completed' : ''}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleCompleted(todo.id)}
                        />
                        <div className='todolist__details'>
                            <div className="todolist__details-title">{todo.title}</div>
                            <div className="todolist__details-title">{todo.description}</div>
                            <div className="todolist__details-title">{todo.deadline}</div>
                        </div>

                        <div className="todolist__actions">
                            <button onClick={() => handleEdit(todo.id)}>Edit</button>
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList