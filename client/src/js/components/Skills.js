import React, {Component} from 'react'

import SkillsList from './SkillsList'
import SkillsData from '../skills.json'
import '../../css/Skills.css'


class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: SkillsData,
    })
  }

  render() {
    return(
      <div className="Skills">
        <h2>Skills</h2>
        <SkillsList skills={this.state.data}/>
      </div>
    )
  }
}

export default Skills