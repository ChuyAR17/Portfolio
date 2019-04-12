// desde react
import React, {Fragment, Component} from 'react'

// componentes hechos
import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Skills from './Skills'
import AbuotMe from './AboutMe'
import Contact from './Contact'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      opacity: 'HeaderInvisible'
    }
  }

  handleScroll() {
    if (document.documentElement.scrollTop > 60) {
      this.setState({ opacity: 'HeaderVisible' })
    }
  }

  render() {
    return(
      <Fragment>
        <Header className={this.state.opacity} />
        <Hero></Hero>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <AbuotMe></AbuotMe>
        <Contact></Contact>
      </Fragment>
    )
  }
}

export default App