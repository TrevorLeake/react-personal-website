import React, {Component} from 'react';
import './Shader.css';

class Shader extends Component {
  render(props) {
    // Record all options as given, or their default value
    const targetURL = "https://www.shadertoy.com/embed/";
    const shaderId = this.props.shaderId;
    const startTime = this.props.startTime || 0;
    const paused = this.props.paused || false;
    const muted = this.props.muted || true;
    const gui = this.props.gui || false;
    const classes = this.props.class;

    // Create the URL by hand like a crazy person
    const url = targetURL.concat(
      shaderId,
      "?t=", startTime,
      "&paused=", paused,
      "&muted=", muted,
      "&gui=", gui
    );

    return (
      <iframe
        className={"shader " + classes}
        id={this.props.name || this.shaderId}
        src={url}
        title="Shader"
        frameBorder="0"
      />
    )
  }
}

export default Shader;
