import React, { Component } from 'react';
import './styles/password.scss';
import secu from "./images/security2.png";
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="password-wrapper">
          <div class="div-img"><img src={secu} alt="security-icon" /></div>
          <div>
            <p>This link is password protected </p>
            <p> Please enter the password to view this link.</p>
            <input type="password" name="password" /> <br />
            <button type="submit" name="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
