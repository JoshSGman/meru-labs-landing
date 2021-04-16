import React from 'react';
import logo from './Assets/MeruLabsLogo.png';
import doughDealerLogo from './Assets/DoughDealerLogo.png';
import niceLogo from './Assets/nice_logo.png';
import './App.css';
import './Fonts/fonts.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <a className="App-header-link" href="mailto:josh@merulabs.com">
        contact
      </a>
    </header>
    <main className="App-main">
      <img src={ logo } className="App-logo" alt="logo" />
      <p className="App-work-main">Our Work:</p>

      <div className="App-links">
        <div className="App-link-container">
          <a
            className="App-link"
            href="https://doughdealer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ doughDealerLogo } className="App-link-logo" alt="logo" />
          </a>
        </div>

        <div className="App-link-container">
          <a
            className="App-link"
            href="https://www.nicefilmlab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ niceLogo }
              className="App-link-logo"
              alt="logo"
              style={ { maxHeight: '90px' } }
            />
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default App;
