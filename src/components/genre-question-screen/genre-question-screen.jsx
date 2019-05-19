import React from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this._handleAnswerClick = this._handleAnswerClick.bind(this);
  }

  _handleAnswerClick(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const checkAnswers = (answers, trueAnswer) => {
      const reuslt = answers.every((it) => {
        return it === trueAnswer;
      });
      if (answers.length > 0) {
        return reuslt;
      }
      return false;
    };

    const from = evt.currentTarget;
    const formData = new FormData(from);
    const answers = formData.getAll(`answer`);
    const result = checkAnswers(answers, this.props.question.answer) ? true : false;

    const formInputs = from.elements.answer;
    for (let answer of formInputs) {
      answer.checked = false;
    }

    this.props.onAnswer(result);
  }

  render() {
    const {question, handlerPlayClick} = this.props;
    return (
      <section className="game game--genre">
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
          <h2 className="game__title">Выберите {question.genre} треки</h2>
          <form className="game__tracks" method="get" onSubmit={this._handleAnswerClick}>
            {question.answers.map((answer, index) => {
              return (
                <div key={`answer` + index} className="track">
                  <button className="track__button track__button--play" type="button" onClick={handlerPlayClick}></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.genre} id={`answer-` + index} />
                    <label className="game__check" htmlFor={`answer-` + index}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func,
  handlerPlayClick: PropTypes.func,
  handlerSubmit: PropTypes.func,
  handlerSubmitClick: PropTypes.func
};

export default GenreQuestionScreen;
