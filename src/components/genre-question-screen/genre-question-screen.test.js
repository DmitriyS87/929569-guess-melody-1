import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

it(`GenreQuestionScreen correctly rendered`, () => {
  const mock = {
    type: `genre`,
    genre: `rap`,
    answers: [
      {
        genre: `rap`,
        url: ``
      },
      {
        genre: `rock`,
        url: ``
      },
      {
        genre: `jass`,
        url: ``
      },
      {
        genre: `pop`,
        url: ``
      },
    ]
  };

  const handlerClick = jest.fn();
  const tree = renderer.create(
      <GenreQuestionScreen
        question={mock}
        onAnswer={handlerClick}
        handlePlayClick={handlerClick}
      />);

  expect(tree).toMatchSnapshot();
});
