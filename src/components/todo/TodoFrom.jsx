import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/slices/todoSclice'
import './Styles.scss'

const TodoFrom = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo({
            title,
            description,
            deadline,
        }));
        setTitle('');
        setDescription('');
        setDeadline('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo__form'>
            <input
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className='todo__form-input'
            />
            <input
                type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className='todo__form-input'
            />
            <input
                type="text"
                placeholder='Deadline'
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                className='todo__form-input'
            />
            <button type='submit' className='todo__form-btn'>Add Todo</button>
        </form>
    )
}

export default TodoFrom