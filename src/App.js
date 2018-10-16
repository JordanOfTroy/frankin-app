import React, { Component } from 'react';
import './reset.css'
import './App.css';
import CSS_Animation from './Components/CSS_Animation/CSS_Animation'
import CSS_FancyEffects from './Components/CSS_FancyEffects/CSS_FancyEffects'
import CSS_Flexbox from './Components/CSS_Flexbox/CSS_Flexbox'
import CSS_Grids_Variables from './Components/CSS_Grids_Variables/CSS_Grids_Variables'
import CSS_MediaQueries from './Components/CSS_MediaQueries/CSS_MediaQueries'
import CSS_PseudoSelectors from './Components/CSS_PseudoSelectors/CSS_PseudoSelectors'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          CSS & HTML Competencies
        </header>
          <CSS_Animation/>
          <CSS_FancyEffects/>
          <CSS_Flexbox/>
          <CSS_Grids_Variables/>
          <CSS_MediaQueries/>
          <CSS_PseudoSelectors/>
      </div>
    );
  }
}

export default App;
