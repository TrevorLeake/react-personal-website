import React, {Component} from 'react';
import Clock from '../Clock/Clock';
import Shader from '../Shader/Shader';
import './Content.css';

const shaderMap = {
  "cars": "wlX3zr"
}



const List = (props) => {
  return (
    <ul>
      {props.items.map(
        (item) => <li>{item}</li>
      )}
    </ul>
  )
}


class Content extends Component {
  render() {
    const items = ["he", "ha", "ho", "AHH", "giggle", "chortle", "psh"];

    return (
      <div className="content">
        Content
        <br/>
        <Shader shaderId={shaderMap["cars"]} paused={true} startTime={1}/>
        <br/>
        <br/>
        Stateful Clock
        <Clock />
        <br/>
        <br/>
        List of Ways to Laugh
        <br/>
        <List items={items} />
        <br/>
        <br/>
        I like to be creative, especially with science
      </div>
    );
  }
}

export default Content;
