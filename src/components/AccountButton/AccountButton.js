import React, {Component} from 'react';
import './AccountButton.css';

class AccountButton extends Component {

  render() {
    const imageWhite = this.props.imageWhite;
    const imageColored = this.props.imageColored;
    const siteName = this.props.name;
    const url = this.props.url;
    let image = imageWhite;

    return (
      <div className="account-button">
        <a href={url}>
          <img src={image} title={siteName} alt={siteName}
               onMouseOver={e => e.currentTarget.src=imageColored}
               onMouseOut={e => e.currentTarget.src=imageWhite}
          />
        </a>
      </div>
    );
  }
}

export default AccountButton;
