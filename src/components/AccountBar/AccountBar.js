import React, {Component} from 'react';
import './AccountBar.css';

import { ReactComponent as Github } from '../../static/logos/github.svg'
import { ReactComponent as Bitbucket } from '../../static/logos/bitbucket.svg'
import { ReactComponent as Instagram } from '../../static/logos/instagram.svg'
import { ReactComponent as Medium } from '../../static/logos/medium.svg'
import { ReactComponent as ItchIO } from '../../static/logos/itchio.svg'
import { ReactComponent as LinkedIn } from '../../static/logos/linkedin.svg'
import { ReactComponent as Soundcloud } from '../../static/logos/soundcloud.svg'
import { ReactComponent as Twitter } from '../../static/logos/twitter.svg'
import { ReactComponent as StackExchange } from '../../static/logos/stack-exchange.svg'
import { ReactComponent as Kaggle } from '../../static/logos/kaggle.svg'


class AccountBar extends Component {
  render() {

    let logos = [
      "Github",
      "Bitbucket",
      "Kaggle",
      "StackExchange",
      "Twitter",
      "Instagram",
      "Medium",
      "ItchIO",
      "LinkedIn",
      "Soundcloud"
    ]

    const onColor = "#fff"
    const offColor = "#000"
    const width = "auto"
    const height = "40px"

    const nameToSVG = {
      "Github":         Github,
      "Bitbucket":      Bitbucket,
      "Instagram":      Instagram,
      "Medium":         Medium,
      "ItchIO":         ItchIO,
      "LinkedIn":       LinkedIn,
      "Soundcloud":     Soundcloud,
      "StackExchange":  StackExchange,
      "Twitter":        Twitter,
      "Kaggle":         Kaggle
    }

    const nameToLink = {
      "Github": "https://www.github.com/trevorleake",
      "Bitbucket": "https://www.bitbucket.com/trevorleake",
      "Instagram": "https://www.instagram.com/trevorjohnleake",
      "Medium": "https://medium.com/@trevorjohnleake",
      "ItchIO": "https://trevorleake.itch.io/",
      "LinkedIn": "https://www.linkedin.com/in/trevor-leake-8b4819132/",
      "Soundcloud": "https://www.soundcloud.com/trevor_leake",
      "StackExchange": "https://stackexchange.com/users/8644667/qfwfq",
      "Twitter": "https://www.twitter.com/trevorleake",
      "Kaggle": "https://www.kaggle.com/trevorleake"
    }


    let colorOn = e => {e.setAttribute('fill', onColor)}
    let colorOff = e => {e.setAttribute('fill', offColor)}
    function deepMap(element, colorFunction) {
      // Iterate through the children of the given element
      let children = element.children;
      for(let i=0; i<children.length; ++i)
        deepMap(children[i], colorFunction);

      // If fill exists, set fill
      let fill = element.getAttribute('fill');
      if(fill !== null && fill !== 'none')
        colorFunction(element);
    }

    return (
      <div className="account-bar">
        {
          logos.map(item => (
            /* The link surrounds the SVG element */
            <a href={nameToLink[item]}>
              {
                /* Found that it was difficult to render an element with a dynamic className */
                React.createElement(
                  nameToSVG[item],
                  {
                    width: width,
                    height: height,
                    onMouseEnter: e => deepMap(e.currentTarget, colorOn),
                    onMouseLeave: e => deepMap(e.currentTarget, colorOff)
                  }
                )
              }
            </a>
          ))
        }
      </div>
    );
  }
}

export default AccountBar;
