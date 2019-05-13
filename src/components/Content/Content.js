import React, {Component} from 'react';
import Shader from '../Shader/Shader';
import ModeSelector from '../ModeSelector/ModeSelector';
import './Content.css';

// Map shader names to their API's identifiers
const shaderMap = {
  "cars": "wlX3zr",
  "paintbrush": "WlfGRN",
  "moving-dots": "ts2SDt"
}


class Content extends Component {
  render() {

    return (
      <div className="content">
        {/*<ModeSelector />*/}

        {/*
        <div id="shader-display">
          <Shader shaderId={shaderMap["cars"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["moving-dots"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["paintbrush"]} paused={true} startTime={1}/>
        </div>
        */}

        <p>
          I like to be creative, especially with science -- AI, music, and mechanical engineering are my jams.
        </p>
      </div>
    );
  }
}

export default Content;
