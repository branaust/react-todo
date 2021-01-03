import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }

    addTodo = (todo) => {
        let newTodo = { ...todo }
        this.setState(state => ({
            todos: [...state.todos, newTodo]

        }))
    }

    editTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo
        })
        this.setState({ todos: updatedTodos })
    }

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    renderItems = () => {
        return (
            <ul className="Todos">
                {this.state.todos.map(todo => (
                    <li className="Todo">
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            id={todo.id}
                            editTodo={() => this.editTodo}
                            removeTodo={() => this.removeTodo(todo.id)}
                        />
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                {this.renderItems()}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList