import React, {Component} from 'react'

import Project from './Project'
import '../../css/Portfolio.css'

class Portfolio extends Component {
  render() {
    return(
      <div className="Portfolio">
        <h2>Portfolio</h2>
        <Project />
        <Project />
        <p>You can help to grow up this list <br /><a>click here ;)</a></p>
      </div>
    )
  }
}

export default Portfolio