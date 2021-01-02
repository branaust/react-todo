import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div>
                <div className='Todo'>Feed Goats</div>
                <button className='delete'>X</button>
            </div>
        )
    }
}

export default Todo