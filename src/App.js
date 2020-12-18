import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from './todos/TodoList';
import './App.css';

const App = () => (
    <div className="App">
        <h1>Stacy's Todo App (built with React!)</h1>
        <TodoList />
    </div>
)

export default hot(module)(App);