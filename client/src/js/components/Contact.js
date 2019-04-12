import React, {Component} from 'react'

import '../../css/Contact.css'

class Contact extends Component {
  render() {
    return(
      <div className="Contact">
        <h2>Contact:</h2>
        <p>
          You can send an e-mail to<br/>
          <strong>jar170396@gmail.com</strong><br/>
          to contact me or visit my social<br/>
          pages...
        </p>
        <div className="Social">
          <img src="" alt="img"/>
          <a href="https://github.com/ChuyAR17" target="blank">Github</a>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <a href="https://twitter.com/JRamirezR17" target="blank">Twitter</a>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <a href="https://www.linkedin.com/in/jesusramirezr17/" target="blank">LinkedIn</a>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <a href="https://instagram.com/j_ramirezr17" target="blank">Instagram</a>
        </div>
        <pre>@MIT Licence Protection</pre>
      </div>
    )
  }
}

export default Contact