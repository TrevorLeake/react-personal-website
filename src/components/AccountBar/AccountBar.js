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

class AccountBar extends Component {
  render() {
    const onColor = "#ffffff"
    const offColor = "#000000"
    const width = "auto"
    const height = "40px"

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

        <a href="https://www.github.com/trevorleake">
          <Github width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.bitbucket.com/trevorleake">
          <Bitbucket width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.instagram.com/trevorleake">
          <Instagram width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.medium.com">
          <Medium width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.itchio.com">
          <ItchIO width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.linkedin.com">
          <LinkedIn width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.soundcloud.com">
          <Soundcloud width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.stackexchange.com">
          <StackExchange width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>

        <a href="https://www.twitter.com/trevorleake">
          <Twitter width={width} height={height} onMouseEnter={e => deepMap(e.currentTarget, colorOn)} onMouseLeave={e => deepMap(e.currentTarget, colorOff)} />
        </a>
      </div>
    );
  }
}

export default AccountBar;
