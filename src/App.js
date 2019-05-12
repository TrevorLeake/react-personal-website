import React, {Component} from 'react';
import {Context} from './Context';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
        human: true,
        gameDev: true,
        softwareEngineer: true,
        machineLearning: true
      }
    }
  }

  toggleThemeValue = (value) => {
    this.setState({
      theme: {
        // Merge the current state's theme
        ...this.state.theme,

        // With the updated theme element
        [value]: !this.state.theme[value]
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Context.Provider
          value={{
            theme: this.state.theme,
            toggleThemeValue: this.toggleThemeValue
          }}
        >
          <NavBar /> {/* NavBar is always out of CSS flow */}
          <Header />
          <Content />
          <Footer />
        </ Context.Provider>
      </div>
    );
  }
}

export default App;
