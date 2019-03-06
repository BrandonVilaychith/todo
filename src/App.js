import React from 'react';
import './App.css';

// Component imports
import { TodoList, TodoForm } from './components';

const App = () => {
    return (
        <div className='App'>
            <TodoList />
            <TodoForm />
        </div>
    );
};

export default App;
