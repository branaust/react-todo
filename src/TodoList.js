import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{ task: "Walk The Kitten" }, { task: "Drink the shower water" }]
        }
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo task={todo.task} />
        });
        return (
            <div>
                <h1>Todo List!</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList