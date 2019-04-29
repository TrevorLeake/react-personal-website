import React, {Component} from 'react';
import AccountButton from '../AccountButton/AccountButton';
import './AccountBar.css';

import shadertoyLogoWhite from '../../static/logos/shadertoy-logo-white.png';
import githubLogoWhite from '../../static/logos/github-logo-white.png';
import itchioLogoWhite from '../../static/logos/itchio-logo-white.png';
import twitterLogoWhite from '../../static/logos/twitter-logo-white.png';
import soundcloudLogoWhite from '../../static/logos/soundcloud-logo-white.png';
import instagramLogoWhite from '../../static/logos/instagram-logo-white.png';
import bitbucketLogoWhite from '../../static/logos/bitbucket-logo-white.png';

import shadertoyLogoColored from '../../static/logos/shadertoy-logo-colored.png';
import githubLogoColored from '../../static/logos/github-logo-colored.png';
import itchioLogoColored from '../../static/logos/itchio-logo-colored.png';
import twitterLogoColored from '../../static/logos/twitter-logo-colored.png';
import soundcloudLogoColored from '../../static/logos/soundcloud-logo-colored.png';
import instagramLogoColored from '../../static/logos/instagram-logo-colored.png';
import bitbucketLogoColored from '../../static/logos/bitbucket-logo-colored.png';



class AccountBar extends Component {
  render() {
    return (
      <div className="account-bar">
        <AccountButton name="Shadertoy" imageWhite={shadertoyLogoWhite} imageColored={shadertoyLogoColored} url="https://www.shadertoy.com/"/>
        <AccountButton name="Github" imageWhite={githubLogoWhite} imageColored={githubLogoColored} url="https://www.github.com/"/>
        <AccountButton name="Itch.io" imageWhite={itchioLogoWhite} imageColored={itchioLogoColored} url="https://itch.io/"/>
        <AccountButton name="Twitter" imageWhite={twitterLogoWhite} imageColored={twitterLogoColored} url="https://www.twitter.com/"/>
        <AccountButton name="Soundcloud" imageWhite={soundcloudLogoWhite} imageColored={soundcloudLogoColored} url="https://www.soundcloud.com/"/>
        <AccountButton name="Instagram" imageWhite={instagramLogoWhite} imageColored={instagramLogoColored} url="https://www.instagram.com/"/>
        <AccountButton name="Bitbucket" imageWhite={bitbucketLogoWhite} imageColored={bitbucketLogoColored} url="https://www.bitbucket.com/"/>
      </div>
    );
  }
}

export default AccountBar;
