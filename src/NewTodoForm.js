import React from 'react';

// NewTodoForm - this component should render a form with 
// one text input for the task to be created. When this 
// form is submitted, a new Todo component should be created.

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todo: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        return (
            <form>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
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