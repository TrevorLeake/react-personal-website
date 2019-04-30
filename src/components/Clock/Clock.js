import React, {Component} from 'react';
import './Clock.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick = () => {this.setState({date: new Date()})}

  componentWillUnmount() {
    clearInterval(this.date);
  }

  render() {
    return (
      <div className="clock">
        Clock
        {this.state.date.toString()}
      </div>
    )
  }
}

export default Clock;
