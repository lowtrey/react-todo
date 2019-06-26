import React from 'react';

// Todo- this component should display a div with 
// the task of the todo.
// For each Todo component, there should also 
// be a button with the text “X” that when clicked, 
// removes the todo.

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    render() {
        return (
            <div>
                <li>
                    {this.props.task} 
                    <button>Edit</button>
                    <button 
                        onClick={this.handleRemove}>X
                    </button>
                </li>
            </div>
        )
    }
}

export default Todo;