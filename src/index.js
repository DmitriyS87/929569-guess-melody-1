import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import settings from './mocks/settings.js';
import questions from './mocks/questions.js';

const entryPoint = document.querySelector(`.main`);

const init = () => {
  ReactDOM.render(<App settings={settings} questions={questions} />, entryPoint);
};

init();
