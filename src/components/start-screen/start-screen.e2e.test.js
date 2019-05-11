import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StartScreen from '../start-screen/start-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`StartScreen welcomeButton click`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<StartScreen
    time={0}
    errorCount={0}
    onClick={clickHandler}
  />);

  const welcomeButton = screen.find(`.welcome__button`);
  welcomeButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
