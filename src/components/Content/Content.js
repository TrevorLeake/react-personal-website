import React, {Component} from 'react';
import Clock from '../Clock/Clock';
import './Content.css';

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
        <br/>
        Stateful Clock
        <Clock />
        <br/>
        <br/>
        List of Ways to Laugh
        <br/>
        <List items={items} />
      </div>
    );
  }
}

export default Content;
