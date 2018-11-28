import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles/home.css';

class App extends Component {
  render() {
    return (
      <div className="homepage">
        <Link to="/invite">invite</Link>
        <Link to="/delete">delete</Link>
        <Link to="/collaborator">collaborator</Link>
        <Link to="/newproject">new project</Link>
        <Link to="/password">password</Link>
      </div>
    );
  }
}

export default App;
