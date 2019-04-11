import React, {Component, Fragment} from 'react'

import '../../css/SkillsList.css'

class SkillsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listId: 0
    }
  }

  handleChange() {
    console.log('funciona')
    this.setState({
      listId: listId + 1
    })
  }

  render() {
    return(
      <Fragment> 
        {this.props.skills.map(skill => {
          return(
            <div key={skill.items.idItem} className="SkillsList">
              <h3>{skill.title}</h3>
              {skill.items.map(skillItem => {
                return(
                  <div key={skillItem.idItem} className="SkillsItem">
                    <img alt="logo"/>
                    <p>{skillItem.itemName}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </Fragment>
    )
  }
}

export default SkillsList