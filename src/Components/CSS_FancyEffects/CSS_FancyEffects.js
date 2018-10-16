import React, {Component} from 'react' 
import './CSS_FancyEffects.css'

class CSS_FancyEffects extends Component {
  render () {
    return (
      <div className = 'grey_box'>
        <h1>CSS_FancyEffects</h1>
        <section className = 'anime_section'>
          <div className = 'anime_obj'>
            <h1>Fancy Effect 1: Box Shadow</h1>
            <div className = 'obj' id = 'obj_4'></div>
          </div>
          <div className = 'anime_obj'>
            <h1>Fancy Effect 2: Gradient</h1>
            <div className = 'obj' id = 'obj_5'></div>
          </div>
          <div className = 'anime_obj'>
            <h1>Fancy Effect 3: Text Affect</h1>
            <div className = 'obj' id = 'obj_6'>
              <h1>Jj</h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CSS_FancyEffects