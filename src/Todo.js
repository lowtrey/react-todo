import React from 'react';

// Todo- this component should display a div with 
// the task of the todo.
// For each Todo component, there should also 
// be a button with the text “X” that when clicked, 
// removes the todo.

class Todo extends React.Component {
    render() {
        return (
            <div>
                <h6>{this.props.task} <button>X</button></h6>
            </div>
        )
    }
}

export default Todo;