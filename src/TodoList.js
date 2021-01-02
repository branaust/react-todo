import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    addTodo = (todo) => {
        let newTodo = { ...todo }
        this.setState(state => ({
            todos: [...state.todos, newTodo]

        }))
    }

    removeItem = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        return (
            <div>
                <Todo />
                <NewTodoForm />
            </div>
        )
    }
}

export default TodoList