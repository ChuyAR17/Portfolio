import React, {Component} from 'react'

import '../../css/Header.css'

class Header extends Component {
  render() {
    return(
      <div className={'Header ' + this.props.className}>
        <i className='Menu'/>
        <h2>Jesús Ramírez</h2>
      </div>
    )
  }
}

export default Header