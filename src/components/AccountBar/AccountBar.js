import React, {Component} from 'react';
import {Context} from '../../Context';
import './AccountBar.css';

// Import our SVG logos
import { ReactComponent as Github } from '../../static/logos/github.svg'
import { ReactComponent as Instagram } from '../../static/logos/instagram.svg'
import { ReactComponent as Medium } from '../../static/logos/medium.svg'
import { ReactComponent as ItchIO } from '../../static/logos/itchio.svg'
import { ReactComponent as LinkedIn } from '../../static/logos/linkedin.svg'
import { ReactComponent as SoundCloud } from '../../static/logos/soundcloud.svg'
import { ReactComponent as Twitter } from '../../static/logos/twitter.svg'
import { ReactComponent as StackExchange } from '../../static/logos/stack-exchange.svg'
import { ReactComponent as Kaggle } from '../../static/logos/kaggle.svg'
import { ReactComponent as Shadertoy } from '../../static/logos/shadertoy.svg'

const nameToSVG = {
  "Github":         Github,
  "Instagram":      Instagram,
  "Medium":         Medium,
  "ItchIO":         ItchIO,
  "LinkedIn":       LinkedIn,
  "SoundCloud":     SoundCloud,
  "StackExchange":  StackExchange,
  "Twitter":        Twitter,
  "Kaggle":         Kaggle,
  "Shadertoy":      Shadertoy,

  "CodePen":        null
}

const nameToLink = {
  "Github": "https://www.github.com/trevorleake",
  "Instagram": "https://www.instagram.com/trevorjohnleake",
  "Medium": "https://medium.com/@trevorjohnleake",
  "ItchIO": "https://trevorleake.itch.io/",
  "LinkedIn": "https://www.linkedin.com/in/trevor-leake-8b4819132/",
  "SoundCloud": "https://www.soundcloud.com/trevor_leake",
  "StackExchange": "https://stackexchange.com/users/8644667/qfwfq",
  "Twitter": "https://www.twitter.com/trevorleake",
  "Kaggle": "https://www.kaggle.com/trevorleake",
  "Shadertoy": "https://www.shadertoy.com/user/trevorleake"
}



class AccountBar extends Component {

  render() {
    const theme = this.context.theme
    const onColor = "#4fb"
    const offColor = "#fff"
    const width = "auto"
    const height = "40px"


    //////////////////////
    // Helper Functions //
    //////////////////////

    // Returns union of lists
    let uniqueAdd = (list, toAdd) => {
      for(let i=0; i<toAdd.length; ++i)
        if(list.indexOf(toAdd[i]) === -1)
          list.push(toAdd[i])
    }

    // Recursively apply color function to SVG fills
    let deepMap = (element, colorFunction) => {
      // Iterate through the children of the given element
      let children = element.children;
      for(let i=0; i<children.length; ++i)
        deepMap(children[i], colorFunction);

      // If fill exists, set fill
      let fill = element.getAttribute('fill');
      if(fill !== null && fill !== 'none')
        colorFunction(element);
    }
    let colorOn = e => {e.setAttribute('fill', onColor)}
    let colorOff = e => {e.setAttribute('fill', offColor)}


    let logos = [
      // "Twitter",
      // "Instagram",
      "Kaggle",
      "Github",
      "StackExchange",
      "LinkedIn",
      // "SoundCloud",
      // "Shadertoy"
    ]
    let machineLearning = [
    ]
    let gameDev = [
    ]

    if(theme.machineLearning)   uniqueAdd(logos, machineLearning)
    if(theme.gameDev)           uniqueAdd(logos, gameDev)

    return (
      <div className="account-bar">
        {
          logos.map(siteName => {
            const TagName = nameToSVG[siteName];

            return (
              /* The link surrounds the SVG element */
              <a href={nameToLink[siteName]} title={siteName} key={siteName}>
                <TagName
                  className="account-logo"
                  width={width}
                  height={height}
                  onMouseEnter={e => deepMap(e.currentTarget, colorOn)}
                  onMouseLeave={e => deepMap(e.currentTarget, colorOff)}
                />
              </a>
            )
          })
        }
      </div>
    );
  }
}
AccountBar.contextType = Context;

export default AccountBar;
