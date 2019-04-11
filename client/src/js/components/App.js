// desde react
import React, {Fragment} from 'react'

// componentes hechos
import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Skills from './Skills'
import AbuotMe from './AboutMe'
import Contact from './Contact'

function App() {
  return(
    <Fragment>
      <Header></Header>
      <Hero></Hero>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <AbuotMe></AbuotMe>
      <Contact></Contact>
    </Fragment>
  )
}

export default App