import React, {Component} from 'react';
import Clock from '../Clock/Clock';
import Shader from '../Shader/Shader';
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
        <div id="shader-display">
          <Shader shaderId={shaderMap["cars"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["moving-dots"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["paintbrush"]} paused={true} startTime={1}/>
        </div>

        <br/>

        <p>
          I do machine learning, mechanical engineering, and math. In my
          off time I also make video games, music, and sometimes go outside.
        </p>

        <p>
          I like to be creative, especially with science. I'm easily entertained
          so I wind up enthralled by anything remotely interesting.
        </p>
      </div>
    );
  }
}

export default Content;
