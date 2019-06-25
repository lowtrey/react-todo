import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <NewTodoForm />
                <Todo />
            </div>
        )
    }
}

export default TodoList;