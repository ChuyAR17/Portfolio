import React, {Component} from 'react'

import '../../css/Hero.css'

class Hero extends Component {
  render() {
    return(
      <div className="HeroContainer">
        <div className="Hero">
          <h1>Welcome</h1>
          <a className="btn btn-primary">Let's Colaborate</a>
        </div>
      </div>
    )
  }
}

export default Hero