import React, {Component} from 'react'

import '../../css/Contact.css'
import Github from '../../images/github.png'
import Twitter from '../../images/twitter.png'
import LinkedIn from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'

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
          <img src={Github} alt="Github"/>
          <span>Github</span>
        </div>
        <div className="Social">
          <img src={Twitter} alt="Twitter"/>
          <span>Twitter</span>
        </div>
        <div className="Social">
          <img src={LinkedIn} alt="LinkedIn"/>
          <span>LinkIn</span>
        </div>
        <div className="Social">
          <img src={Instagram} alt="Instagram"/>
          <span>Instagram</span>
        </div>
        <pre>@MIT Licence Protection</pre>
      </div>
    )
  }
}

export default Contact