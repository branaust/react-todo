import React, { Component } from 'react'

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task
        }
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleUpdate = (evt) => {
        evt.preventDefault()
        this.props.editTodo(this.props.id, this.state.task)
        this.setState({ isEditing: false, task: this.state.task })
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    render() {

        let result
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name='task'
                            onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result =
                <div>
                    <div className='Todo'>{this.state.task}</div>
                    <button className="edit" onClick={this.toggleForm}>Edit</button>
                    <button className='delete' onClick={this.props.removeTodo}>X</button>


                </div>
        }
        return (
            result
        )
    }
}

export default Todo