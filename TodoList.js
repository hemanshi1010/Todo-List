import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";  // child component -- Used to add new todos.
import Todo from "./Todo";  // child component -- Used to display each todo item.
import "./TodoList.css";   // import css file for styling
import { CSSTransition, TransitionGroup } from "react-transition-group";
// CSSTransition animates one element.
// TransitionGroup manages multiple animated elements.


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []   // no todo exists when app first loads. This state will be updated as user adds new todos.
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {  // Called when a new todo is added.
        this.setState({
            todos: [...this.state.todos, newTodo]    // spread operator to add new todo to the end of the array
        });
    }
    remove(id) {  // Deletes a todo.
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)   // filter() creates a new array excluding the matching id.
        });
    }
    update(id, updatedTask) {  // Updates the text of a todo.
        const updatedTodos = this.state.todos.map(todo => {  // Map checks every todo.
            if (todo.id === id) {  // If IDs match
                return { ...todo, task: updatedTask };  // Copy old object and replace task.
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    toggleCompletion(id) {  // Marks todo complete/incomplete.
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    render() {
        const todos = this.state.todos.map(todo => (
            <CSSTransition key={todo.id} timeout={500} classNames="todo">  
            {/* Every todo gets a 500ms animation while entering or leaving. */}
            {/* Animation for each todo item */}

                <Todo  // Parent sends data and functions to child. Child can call these functions.
                    key={todo.id}
                    id={todo.id}   // data
                    task={todo.task}  // data
                    completed={todo.completed}  // data
                    removeTodo={this.remove}   // function
                    updateTodo={this.update}   // function
                    toggleTodo={this.toggleCompletion}  // function
                />

                {/* Here, the parent creates the NewTodoForm component and 
                passes a function called create as a prop named createTodo.
                 */}
            </CSSTransition>
        ));
        return (
            <div className="TodoList"> 
            {/* Entire app container. */}
                <h1>
                    Get To Work! <span>An Animated Todo List Made With React Hooks</span>
                </h1>
                <NewTodoForm createTodo={this.create} />  
                {/* Allows adding todos. */}

                <ul>
                    <TransitionGroup className="todo-list">{todos}</TransitionGroup>
                    {/* Displays all todos with animations. */}
                </ul>
            </div>
        );
    }
}

export default TodoList;

// The parent and child components are connected through props (properties)
// and callback functions.

//TodoList is the parent component because it renders both NewTodoForm and Todo.

//NewTodoForm and Todo are child components.
