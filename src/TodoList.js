import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

// TodoList - this component should render the NewTodoForm 
// component and should render the list of Todo components. 
// Place your state that contains all of the todos in this 
// component.

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: [
            {task: 'Wake Up', id: 1},
            {task: 'Go to Sleep', id: 2}
        ]};
        this.addTask = this.addTask.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
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
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task: updatedTask};
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }
    render() {
        const todos = this.state.todos.map(todo => (
            <Todo
                key={todo.id} 
                id={todo.id} 
                task={todo.task} 
                remove={this.remove}
                updateTodo={this.update} 
                completed={todo.completed}
                toggleTodo={this.toggleCompletion}
            />
        ));
        return (
            <div className='TodoList'>
                <h1>
                    Todos! <span>-A Simple React Todo List App-</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TodoList;