import React, { Component } from 'react'
import campusImage from "../img/campus.jpg"
export class Campuses extends Component {
  render() {
    return (
      <div>
       <div className='eventsImg'> <img className = 'eventImg' src = {campusImage} alt='Home' /> </div>
      </div>
    )
  }
}

export default Campuses


