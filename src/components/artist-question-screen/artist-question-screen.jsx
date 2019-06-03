import React from 'react';
import PropTypes from 'prop-types';

class ArtistQuestionScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this._onAnswer = this._onAnswer.bind(this);
  }

  _onAnswer(evt) {
    this.props.onAnswer(evt.target.value);
  }

  render() {
    const {question, handlerPlayClick} = this.props;
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <button className="track__button track__button--play" type="button" onClick={handlerPlayClick}></button>
            <audio></audio>
          </div>
          <form className="game__artist">
            {question.answers.map((answer, index) => {
              return (
                <div key={index} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer" value={answer.artist} id={`answer-` + index} onClick={this._onAnswer} />
                  <label className="artist__name" htmlFor={`answer-` + index}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>);
            }) }
          </form>
        </section>
      </section>


    );
  }
}

ArtistQuestionScreen.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func,
  handlerPlayClick: PropTypes.func,
  handlerSubmit: PropTypes.func
};

export default ArtistQuestionScreen;
