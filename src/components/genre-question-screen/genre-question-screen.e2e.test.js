import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockQuestion = {
  type: `genre`,
  genre: `rap`,
  answers: [
    {
      genre: `rap`,
      url: ``
    },
    {
      genre: `pop`,
      url: ``
    },
    {
      genre: `hip-hop`,
      url: ``
    },
    {
      genre: `rap`,
      url: ``
    },

  ]
};

const mockedEvent = {preventDefault() { }};

it(`GenreQuestionScreen songs buttons clicks 4 times`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<GenreQuestionScreen
    question={mockQuestion}
    handlerPlayClick={clickHandler}
    onAnswer={clickHandler}
  />);

  const playButtons = screen.find(`.track__button`);
  playButtons.forEach((playButton) => {
    playButton.simulate(`click`, mockedEvent);
  });

  expect(clickHandler).toHaveBeenCalledTimes(4);
});
