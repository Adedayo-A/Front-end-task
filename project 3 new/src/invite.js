import React, { Component } from 'react';
import './styles/invite.scss';
import logo from "./images/user-logo.png";
import plus from "./images/plus.png";
import custom from "./images/custom-msg.png";
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="overall-container-1">
          <div class="second-container">
            <nav>
              <div class="nav-image">
                <img src={logo} alt="user-icon" />
              </div>
              <div class="nav-invite-people"><p>Invite new members</p></div>
              <div class="nav-close">x</div>
            </nav>

            <div class="div-first-layer">
              <div class="div-email">
                <p> Email address </p>
              </div>
              <div class="div-fullname">
                <p> Full name (optional) </p>
              </div>
            </div>

            <div class="div-second-layer">
              <div class="div-input-email">
                <input type="email" placeholder="Enter email address" />
              </div>
              <div class="div-input-fullname">
                <input type="text" placeholder="Enter full name" />
              </div>
            </div>

            <div class="div-third-layer">
              <div class="div-icon-text">
                <div class="div-icon">
                  <img src={plus} alt="a view icon" />
                </div>
                <div class="div-text">
                  <p> Add another person</p>
                </div>
              </div>
              <div class="div-icon-text2">
                <div class="div-icon2">
                  <img src={custom} alt="a view icon" />
                </div>
                <div class="div-text2">
                  <p> Add custom message</p>
                </div>
              </div>
            </div>

            <div class="div-fourth-layer">
              <p>You'll be charged a prorated amount for each new </p>
              <p>member. <span>See our billing guidelines.</span></p>
            </div>
          </div>

          <div class="div-fifth-layer">
            <div class="div-invite">
              <button name="Invite" class="button-invite">Invite</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
