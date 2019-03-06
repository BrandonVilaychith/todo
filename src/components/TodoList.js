import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const TodoList = (props) => {
    const toggleTodo = (e, index) => {
        e.preventDefault();
        props.toggleTodo(index);
    };
    const displayTodos = props.todos.map((todo, index) => (
        <h1 key={index} onClick={(e) => toggleTodo(e, index)}>
            {todo.value}
        </h1>
    ));
    return <div>{displayTodos}</div>;
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps,
    { toggleTodo }
)(TodoList);
