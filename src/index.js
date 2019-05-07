import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const entryPoint = document.querySelector(`.main`);

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime} />, entryPoint);
};

init();
