/*
import React, {Component} from 'react';
import {Context} from '../../Context';


class ModeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameDev: false,
      machineLearning: false
    }
  }

  render() {

    return (
      <Context.Consumer>
        {({theme, toggleThemeValue}) =>
          <>
            <button onClick={e => toggleThemeValue('gameDev')}>
              Game Dev
            </button>

            <button onClick={e => toggleThemeValue('machineLearning')}>
              Machine Learning
            </button>
          </>
        }
      </ Context.Consumer>
    )
  }
}

export default ModeSelector;
*/
