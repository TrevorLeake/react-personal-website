import React, {Component} from 'react';
import './NavLink.css';

class NavLink extends Component {
  render() {
    let url = this.props.url;
    let name = this.props.name;

    return (
      // If we should hide, hide. CSS takes care of the fading.
      <a className="nav-link" href={url} id={name}>
        {name}
      </a>
    );
  }
}

export default NavLink;
