import React, { Component } from 'react';
import './styles/delete.scss';
import dele from "./images/delete.png";
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="overall-container-3">
          <div class="second-container">
            <nav>
              <div class="nav-image">
                <img src={dele} alt="user-icon" />
              </div>
              <div class="nav-delete"><p>Delete the link?</p></div>
              <div class="nav-close">x</div>
            </nav>

            <div class="div-first-layer">
              <p>If you delete the link will be gone forever. Are you sure </p>
              <p> you want to proceed?</p>
            </div>

            <div class="div-second-layer">
              <div class="div-proceed">
                <button name="cancel" class="button-delete">Delete</button>
              </div>
              <div class="div-cancel">
                <button name="cancel" class="button-cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
