import React, {Component} from 'react';
import NavLink from '../NavLink/NavLink';
import './NavBar.css';

class NavBar extends Component {
  state = {position: window.pageYOffset};

  // Update page position
  positionUpdate = () => {this.setState({position: window.pageYOffset});}

  // Call the update function on every scroll event
  componentDidMount() {window.addEventListener('scroll', this.positionUpdate)}

  render() {
    // Note if we're past the fade position
    let fadePosition = 100;
    let isHidden = window.pageYOffset > fadePosition;
    let pathToResume = process.env.PUBLIC_URL + '/Resume -- Trevor Leake.pdf';

    return (
      // If we should hide, hide. CSS takes care of the fading.
      <div className={isHidden ? "nav-bar hide" : "nav-bar"}>
        <NavLink name="Resume" target="_blank" url={pathToResume} />
        <NavLink name="Works" url="#works" />
      </div>
    );
  }
}

export default NavBar;
