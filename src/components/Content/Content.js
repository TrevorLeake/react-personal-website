import React, {Component} from 'react';
import Shader from '../Shader/Shader';
import ModeSelector from '../ModeSelector/ModeSelector';
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
      <div className="content">
        {/*<ModeSelector />*/}
        <h5>
          I like to be creative, especially with science -- AI, music, and mechanical engineering are my jams.
        </h5>

        <div id="dividing-line" />


        {/* Checkpoint for the nav-link to move to */}
        <div id="works" />

        <div className="text-block">
          <h2> Shaders </h2>
          <div class="subtitle">Click each to see them move</div>

          <br/>
          <p>
          They're visual, which makes them gratifying to write but also means
          they sorely need of optimization. Shaders can be run entirely GPU
          bound; which means referencing the past becomes is generally pretty
          nasty unless we can model the entire system mathematically.
          </p>
          <br/>

          <div id="shader-display-group">
            <Shader shaderId={shaderMap["cars"]} paused={true} startTime={1}/>
            <Shader shaderId={shaderMap["moving-dots"]} paused={true} startTime={1}/>
            <Shader shaderId={shaderMap["paintbrush"]} paused={true} startTime={1}/>
          </div>

          <br/>
          <p>
          For simple shaders like the ones I've written here, a mathematical
          model seems reasonable. For more interesting shaders (like the one
          below which I've titled "Egg Sac"), a math model seems kinda
          ridiculous. Modelling a scene like this is fun, creative way to test
          out skills in CS optimization & in math.
          </p>
          <br/>

          <div id="shader-display-solo">
            <Shader shaderId={shaderMap["egg-sac"]} class="shader-solo" paused={true} startTime={1}/>
          </div>

          <p>
            I've been having a lot of fun lately trying to develop pretty & mathematically
            interesting ideas in shader form. You can play with them or make your own
            on <a href="https://www.shadertoy.com">shadertoy</a>.
          </p>
        </div>

        <div id="dividing-line" />

        <div className="text-block">
          <p>
            I'm also involved in a honeypot security project, play jazz around
            Portland, and do game dev, among lots of other stuff. I'm planning
            to make this into a feed from sites I'm active on. But, not yet. :)
          </p>
        </div>
      </div>
    );
  }
}

export default Content;
