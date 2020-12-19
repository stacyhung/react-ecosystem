import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { getTodos, getTodosLoading } from './selectors';
import { removeTodo, markTodoAsCompleted } from './actions';
import './Todos.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
        />)}
    </div>
);

const mapStateToProps = state => ({
    todos: getTodos(state),
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);