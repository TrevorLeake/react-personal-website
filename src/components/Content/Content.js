import React, {Component} from 'react';
import Shader from '../Shader/Shader';
// import ModeSelector from '../ModeSelector/ModeSelector';
import './Content.css';

// Map shader names to their API's identifiers
const shaderMap = {
  "cars": "wlX3zr",
  "paintbrush": "WlfGRN",
  "moving-dots": "ts2SDt",
  "egg-sac": "WtX3Wr"
}



class Content extends Component {

  
  render() {

    return (
      <div id="content-container">
        <div className="content">
          {/*<ModeSelector />*/}
          {/* Checkpoint for the nav-link to move to */}
          {/* <div id="dividing-line" /> */}
        </div>
      </div>
    );
  }
}

export default Content;
