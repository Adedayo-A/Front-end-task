import React, { Component } from 'react';
import './styles/collaborator.scss';
import collab from "./images/collaborator.png";
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="overall-container-4">
          <div class="second-container">
            <nav>
              <div class="nav-image">
                <img src={collab} alt="user-icon" />
              </div>
              <div class="nav-collaborator"><p>Collaborator cannot share</p></div>
              <div class="nav-close">x</div>
            </nav>

            <div class="div-first-layer">
              <p>You are currently a collaborator on Team name. </p>
              <p>Sharing is only available to Team members</p>
            </div>

            <div class="div-second-layer">
              <div class="div-dismiss">
                <button name="cancel" class="button-dismiss">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
