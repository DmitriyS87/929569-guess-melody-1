import React from 'react';
import StartScreen from '../start-screen/start-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;
  const clickHandler = (evt) => {
    evt.preventDefault();
  };
  return (
    <StartScreen time={gameTime} errorCount={errorCount} onClick={clickHandler} />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;
