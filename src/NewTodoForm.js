import React from 'react';
import uuid from 'uuid/v4';

// NewTodoForm - this component should render a form with 
// one text input for the task to be created. When this 
// form is submitted, a new Todo component should be created.

class NewTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {task: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let newTodo = {...this.state, id: uuid(), completed: false};
        this.props.addTask(newTodo);
        this.setState({task: ''});
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
                />
                <button>+</button>
            </form>
        )
    }
}

export default NewTodoForm;