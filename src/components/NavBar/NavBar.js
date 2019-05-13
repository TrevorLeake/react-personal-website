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

    return (
      // If we should hide, hide. CSS takes care of the fading.
      <div className={isHidden ? "nav-bar hide" : "nav-bar"}>
        <NavLink name="Contact" url="" />
        <NavLink name="Resume" target="_blank" url="/resume.pdf" />
      </div>
    );
  }
}

export default NavBar;
