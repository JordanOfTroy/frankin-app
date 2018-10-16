import React, {Component} from 'react'
import './CSS_Flexbox.css'

class CSS_Flexbox extends Component {
  render () {
    return (
      <div className = 'grey_box'>
        <h1>CSS_Flexbox</h1>
        <section className = 'anime_section' >
        <div></div>
          <div className = 'anime_obj flex_me' id = 'flex_Fwd'>
            <h1>Flex 1: Flex Wrap</h1>
            <div className = 'flexed_obj' id = 'obj_7'>
              <h1>1</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_8'>
              <h1>2</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_9'>
              <h1>3</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_10'>
              <h1>4</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_11'>
              <h1>5</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_12'>
              <h1>6</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_13'>
              <h1>7</h1>
            </div>
          </div>
          <div className = 'anime_obj flex_me' id = 'flex_Rev'>
            <h1>Flex 2: Flex Wrap Reverse</h1>
            <div className = 'flexed_obj' id = 'obj_14'>
              <h1>1</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_15'>
              <h1>2</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_16'>
              <h1>3</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_17'>
              <h1>4</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_18'>
              <h1>5</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_19'>
              <h1>6</h1>
            </div>
            <div className = 'flexed_obj' id = 'obj_20'>
              <h1>7</h1>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CSS_Flexbox