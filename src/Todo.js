import React from 'react';

// Todo- this component should display a div with 
// the task of the todo.
// For each Todo component, there should also 
// be a button with the text “X” that when clicked, 
// removes the todo.

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    toggleForm() {
        this.setState({isEditing: !this.state.isEditing});
    }
    handleUpdate(evt) {
        evt.preventDefault();
        // take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input 
                            type='text' 
                            name='task' 
                            value={this.state.task} 
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <li>
                        {this.props.task} 
                        <button onClick={this.toggleForm}>Edit</button>
                        <button 
                            onClick={this.handleRemove}>X
                        </button>
                    </li>
                </div>
            )
        }
        return result;
    }
}

export default Todo;