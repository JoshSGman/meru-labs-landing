import React from 'react';
import logo from './Assets/MeruLabsLogo.png';
import meruTattooCareLogo from './Assets/MeruTattooCareLogo.png';
import doughDealerLogo from './Assets/DoughDealerLogo.png';
import './App.css';
import './Fonts/fonts.css';

const goToMeru = () => {
  window.open('https://www.merutattoocare.com', '_blank');
};

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
        <div
          onClick={ goToMeru }
          className="App-link-container"
          role="presentation"
        >
          <img src={ meruTattooCareLogo } className="App-link-logo" alt="logo" />
          <span
            className="App-link"
            href="https://www.merutattoocare.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tattoo Care Products
          </span>
        </div>

        <div className="App-link-container">
          <img src={ doughDealerLogo } className="App-link-logo" alt="logo" />
          <a
            className="App-link App-link-null"
            href="#ComingSoon"
            rel="noopener noreferrer"
          >
            Coming Soon
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default App;
