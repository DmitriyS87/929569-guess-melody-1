import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen.jsx';

it(`ArtistQuestionScreen correctly rendered`, () => {
  const mock = {
    type: `artist`,
    artist: `Basta`,
    answers: [
      {
        artist: `Philipp Kirkorov`,
        picture: ``
      },
      {
        artist: `Slava KPSS`,
        picture: ``
      },
      {
        artist: `Basta`,
        picture: ``
      }
    ]
  };

  const handlerClick = jest.fn();
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={mock}
        handlerAnswerClick={handlerClick}
        handlePlayClick={handlerClick}
        handleSubmit={handlerClick}
      />);

  expect(tree).toMatchSnapshot();
});
