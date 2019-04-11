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
          <span>Github</span>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <span>Twitter</span>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <span>LinkIn</span>
        </div>
        <div className="Social">
          <img src="" alt="img"/>
          <span>Instagram</span>
        </div>
        <pre>@MIT Licence Protection</pre>
      </div>
    )
  }
}

export default Contact