import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockQuestion = {
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

const mockedEvent = {target: {}};

it(`ArtistQuestionScreen song button play`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<ArtistQuestionScreen
    question={mockQuestion}
    handlerPlayClick={clickHandler}
    onAnswer={clickHandler}
  />);

  const playButton = screen.find(`.track__button`);
  playButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`ArtistQuestionScreen answer button click 3 times`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<ArtistQuestionScreen
    question={mockQuestion}
    handlerPlayClick={clickHandler}
    onAnswer={clickHandler}
  />);

  const answerButtons = screen.find(`.artist__input`);
  answerButtons.forEach((answerButton) => {
    answerButton.simulate(`click`, mockedEvent);
  });

  expect(clickHandler).toHaveBeenCalledTimes(3);
});
