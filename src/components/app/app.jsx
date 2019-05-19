import React from 'react';
import StartScreen from '../start-screen/start-screen.jsx';
import PropTypes from 'prop-types';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: -1,
      answers: []
    };

    this._onAnswer = this._onAnswer.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  _handlerSubmit(evt) {
    evt.preventDefault();

  }

  _handlerClick() {
  }

  _getScreen(question) {
    if (!question) {
      const {settings} = this.props;
      return <StartScreen
        time={settings.gameTime}
        errorCount={settings.errorCount}
        onClick={this._onClick}
      />;
    }

    switch (question.type) {
      case `artist`:
        return <ArtistQuestionScreen question={question} onAnswer={this._onAnswer} handlerPlayClick={this._handlerClick} handlerSubmit={this._handlerSubmit} />;
      case `genre`:
        return <GenreQuestionScreen question={question} onAnswer={this._handlerClick} handlerPlayClick={this._handlerClick} handlerSubmit={this._handlerSubmit} handlerSubmitClick={this._onAnswer} />;
    }

    throw new Error(`App screen state is not defined`);

  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return (
      this._getScreen(questions[question])
    );
  }

  _onAnswer(answer) {
    this.setState({
      question: ((this.state.question + 1) >= this.props.questions.length) ? (-1) : (this.state.question + 1),
      answers: this.state.answers.concat(answer)
    });
  }

  _onClick() {
    this.setState({
      question: this.state.question + 1,
      answers: []
    });
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired
  }),
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.object.isRequired),
    genre: PropTypes.string,
    artist: PropTypes.string
  })).isRequired
};

export default App;
