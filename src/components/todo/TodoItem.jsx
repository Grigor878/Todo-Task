import React, { useState } from 'react';

const TodoItem = ({ todo, onToggleCompleted, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [deadline, setDeadline] = useState(todo.deadline);

    const handleToggleCompleted = () => {
        onToggleCompleted(todo.id);
    };

    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, { title, description, deadline });
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className={todo.completed ? "todolist__completed" : "todolist"}>
            <div className='todolist__row'>
                <input
                    className='todolist__check'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={handleToggleCompleted}
                />
                {
                    isEditing ? (
                        <div className="todolist__details">
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="todolist__details">
                            <div className="todolist__title">Titile - {todo.title}</div>
                            <div className="todolist__description">Description - {todo.description}</div>
                            <div className="todolist__deadline">Deadline - {todo.deadline}</div>
                        </div>
                    )
                }
                <div className="todolist__actions">
                    <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div >
    )
}

export default TodoItem