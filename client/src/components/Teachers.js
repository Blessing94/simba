import React, { Component } from 'react'
import teachersImage from "../img/teachers.jpg"
export class Teachers extends Component {
    render() {
        return (
            <div>
                <div className='eventsImg'> <img className = 'eventImg' src = {teachersImage} alt='Home' /> </div>
            </div>
        )
    }
}

export default Teachers
