import React, {Component} from 'react';
import AccountBar from '../AccountBar/AccountBar';
import './Header.css';
import bodyImage from '../../static/full-body.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img id="body-image" alt="Beautiful art. 10/10" src={bodyImage} />
        <AccountBar />
      </div>
    );
  }
}

export default Header;
