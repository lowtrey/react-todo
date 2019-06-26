import React from 'react';

// NewTodoForm - this component should render a form with 
// one text input for the task to be created. When this 
// form is submitted, a new Todo component should be created.

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    placeholder='New Todo...'
                    onChange={this.handleChange}
                >
                </input>
                <button>+</button>
            </form>
        )
    }
}

export default NewTodoForm;