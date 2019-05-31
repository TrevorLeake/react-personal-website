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
        <h5>
          I like to be creative, especially with science -- AI, music, and mechanical engineering are my jams.
        </h5>

        {/* Checkpoint for the nav-link to move to */}
        <div id="works" />

        <div className="text-block">
          <h2> Shaders </h2>
          <p>
          They're visual, which makes them gratifying to write but also means they're
          in sore need of optimization. Shaders are run entirely GPU bound. This
          means referencing the past becomes very computationally intensive,
          unless we can model the entire system mathematically.
          </p>
        </div>

        <div id="shader-display">
          <Shader shaderId={shaderMap["cars"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["moving-dots"]} paused={true} startTime={1}/>
          <Shader shaderId={shaderMap["paintbrush"]} paused={true} startTime={1}/>
        </div>

        <p>
          I've been having a lot of fun lately trying to develop pretty & mathematically
          interesting ideas in shader form. You can play with them yourself
          on <a href="https://www.shadertoy.com">shadertoy</a>.
        </p>


      </div>
    );
  }
}

export default Content;
