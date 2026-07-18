import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";


// NewTodoForm -- Collect user input.
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };   // Textbox initially empty.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {  // Runs every time user types.
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {  
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuidv4(), completed: false });  // here child recieves props from parent
        // this object is passed to parent component (TodoList) as an argument to createTodo function.
        this.setState({ task: "" });   // Textbox becomes empty.
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    placeholder="New Todo"
                    id="task"
                    name="task"
                    value={this.state.task}  // Controlled Component Textbox always displays state value.
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewTodoForm;
