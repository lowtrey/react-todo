import React from 'react';

// NewTodoForm - this component should render a form with 
// one text input for the task to be created. When this 
// form is submitted, a new Todo component should be created.

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h3>Todo Form Here</h3>
            </div>
        )
    }
}

export default NewTodoForm;