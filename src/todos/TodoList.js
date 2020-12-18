import React from 'react';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import './Todos.css';

const TodoList = ({ todos = [{ text: "React" }] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;