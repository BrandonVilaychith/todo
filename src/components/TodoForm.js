import React, { useState } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const TodoForm = (props) => {
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e) => {
        e.preventDefault();

        const todo = {
            value: newTodo,
            completed: false
        };

        props.addTodo(todo);

        setNewTodo('');
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    type='text'
                    placeholder='New Todo...'
                    autoComplete='off'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
};

export default connect(null, { addTodo })(TodoForm);
