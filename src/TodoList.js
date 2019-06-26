import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

// TodoList - this component should render the NewTodoForm 
// component and should render the list of Todo components. 
// Place your state that contains all of the todos in this 
// component.

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: [
            {task: 'Wake Up'},
            {task: 'Do Shit'},
            {task: 'Eat Sustinence'},
            {task: 'Go to Sleep'}
        ]};
    }
    render() {
        const todoList = this.state.todos.map(todo => (
        <Todo task={todo.task} />
        ));
        return (
            <div>
                <h2>Todo List</h2>
                {todoList}
                <NewTodoForm />
            </div>
        )
    }
}

export default TodoList;