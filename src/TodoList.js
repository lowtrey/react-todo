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
        this.delete = this.delete.bind(this);
    }
    addTask(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        });
    }
    delete(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
        
    }
    render() {
        const todoList = this.state.todos.map(todo => (
            <Todo
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                delete={() => this.delete(todo.id)} 
            />
        ));
        return (
            <div>
                <h2>Todo List</h2>
                {todoList}
                <NewTodoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TodoList;