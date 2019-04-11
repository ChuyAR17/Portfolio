import React, {Component} from 'react'

import '../../css/AboutMe.css'
import ProfileImage from '../../images/profile.jpg'

class AboutMe extends Component {
  render() {
    return(
      <div className="AboutMe">
        <h2>About Me</h2>
        <img src={ProfileImage}/>
        <pre>
          Hi! my name is Jesus Ramirez I´m<br />
          actually an student of Systems<br /> 
          Engineering on "Universidad de<br />
          Sonora". I'm apassionate of Web<br /> 
          Development as a FrontEnd<br />
          Developer and Mobile Development.<br />
          I like to learn new technologies and<br />
          innovate, I have liking for general<br />
          design. My hobbies are play soccer,<br />
          drawing and listen music. If you<br />
          decide to work together in a Project<br />
          for your startup or company send<br />
          me an e-mail and sure I'll help you.
        </pre>
      </div>
    )
  }
}

export default AboutMe