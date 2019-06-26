import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

// TodoList - this component should render the NewTodoForm 
// component and should render the list of Todo components. 
// Place your state that contains all of the todos in this 
// component.

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