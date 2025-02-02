import React, { Component } from 'react'
import eventsImage from "../img/schoolEvents.png"
import '../components.css'

export class Events extends Component {
    render() {
        return (
           
                <div className='eventsImg'> <img className = 'eventImg' src = {eventsImage} alt='Home' /> </div>
           
        )
    }
}

export default Events
