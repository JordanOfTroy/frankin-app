import React, {Component} from 'react' 
import './CSS_Animation.css'

class CSS_Animation extends Component {
  render () {
    return (
      <div className = 'grey_box'>
        <h1>CSS_Animation</h1>
        <section className = 'anime_section'>
          <div className = 'anime_obj'>
            <h1>Animation 1: Keyframes</h1>
            <div className = 'obj' id = 'obj_1'></div>
          </div>
          <div className = 'anime_obj'>
            <h1>Animation 2: Transition</h1>
            <div className = 'obj' id = 'obj_2'></div>
          </div>
          <div className = 'anime_obj'>
            <h1>Animation 3: Transform</h1>
            <div className = 'obj' id = 'obj_3'></div>
          </div>
        </section>
      </div>
    )
  }
}

export default CSS_Animation