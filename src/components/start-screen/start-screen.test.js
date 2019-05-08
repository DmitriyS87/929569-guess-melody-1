import React from 'react';
import renderer from 'react-test-renderer';
import StartScreen from '../start-screen/start-screen.jsx';

it(`StartScreen correctly rendered`, () => {
  const tree = renderer
  .create(<StartScreen
    time={0}
    errorCount={0}
    onclick={jest.fn()}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
