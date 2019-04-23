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
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      opacity: 'HeaderInvisible',
      upToDown: 'UpToDown'
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  handleScroll() {
    const windowBottom = window.innerHeight + window.pageYOffset
    if (windowBottom >= (window.innerHeight*2)) {
      this.setState({ opacity: 'HeaderVisible' })
    } else {
      this.setState({ opacity: ' ' })
    }
  }

  render() {
    return(
      <Fragment>
        <Header className={this.state.opacity} initial={this.state.upToDown}/>
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