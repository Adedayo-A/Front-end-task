import React, { Component } from 'react';
import './styles/newproject.scss';
import media from "./images/media.png";
import view from "./images/view.png";
import notif from "./images/publicnotification.png";
import slack from "./images/slack-icon.png";
import Home from './home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="overall-container">
          <div class="second-container">
            <nav>
              <div class="nav-image">
                <img src={media} alt="media-icon" />
              </div>
              <div class="nav-new-project"><p>New Project</p></div>
              <div class="nav-close">x</div>
            </nav>

            <div class="div-input">
              <input type="text" placeholder="Frame.io movie" />
            </div>
            <div class="div-design-team">
              <select>
                <option value="">Design team</option>
                <option value="">Product team</option>
                <option value="">Records team</option>
              </select>
            </div>

            <div class="div-first-layer">
              <div class="div-icon-text">
                <div class="div-icon">
                  <img src={view} alt="a view icon" />
                </div>
                <div class="div-text">
                  <p> Anyone on your team can view</p>
                </div>
              </div>
              <div class="div-img-public">
                <img src={notif} alt="icon for view setings" />
              </div>
            </div>

            <div class="div-second-layer">
              <div class="div-icon-text2">
                <div class="div-icon2">
                  <img src={slack} alt="slack icon" />
                </div>
                <div class="div-text2">
                  <p class="view-p"> Slack notofication</p>
                </div>
              </div>
              <div class="div-select-attribute">
                <select>
                  <option value="">#product design</option>
                  <option value="">#specification</option>
                  <option value="">#type design</option>
                </select>
              </div>
            </div>
          </div>
          <div class="third-layer">
            <div class="div-more-options">
              <p>More options <span>v</span></p>
            </div>
            <div class="div-create-project">
              <button name="Create project" class="button-create-project">Create project</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
