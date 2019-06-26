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
            {task: 'Wake Up', id: 1},
            {task: 'Eat Sustinence', id: 2},
            {task: 'Do Shit', id: 3},
            {task: 'Go to Sleep', id: 4}
        ]};
        this.addTask = this.addTask.bind(this);
        this.remove = this.remove.bind(this);
    }
    addTask(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                remove={this.remove} 
            />
        ));
        return (
            <div>
                <h2>Todo List</h2>
                <ul>{todos}</ul>
                <NewTodoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TodoList;