import React, { useState } from 'react'

const TodoItem = ({ todo, onToggleCompleted, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false)

    const [title, setTitle] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [deadline, setDeadline] = useState(todo.deadline)

    const handleToggleCompleted = () => {
        onToggleCompleted(todo.id)
    }

    const handleDelete = () => {
        onDelete(todo.id)
    }

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, { title, description })
        }
        setIsEditing(!isEditing)
    }


    return (
        <div className={todo.completed ? 'todolist__completed' : ''}>
            <input
                type="checkbox"
                checked={todo.completed}
            />
            {isEditing
                ? <div className='todolist__details'>
                    <input
                        type="text"
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='todo__form-input'
                    />
                    <input
                        type="text"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='todo__form-input'
                    />
                    <input
                        type="text"
                        placeholder='Deadline'
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className='todo__form-input'
                    />
                </div>
                : <div className='todolist__details'>
                    <p>{todo.title}</p>
                    <p>{todo.description}</p>
                    <p>{todo.deadline}</p>
                </div>
            }

            <div className="todolist__actions">
                <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
                <button onClick={handleDelete} >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem