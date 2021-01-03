import React, { Component } from 'react'
import uuid from "uuid/v4"

class NewTodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = { task: '' }
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleAdd = (evt) => {
        evt.preventDefault()
        const newTodo = { ...this.state, id: uuid() }
        this.props.addTodo(newTodo)
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit={this.handleAdd}>
                    <label htmlFor='task'>New Todo</label>
                    <input
                        id="task"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm