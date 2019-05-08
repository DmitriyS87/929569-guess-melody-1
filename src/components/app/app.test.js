import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

it(`App correctly rendered`, () => {
  const tree = renderer
  .create(<App
    errorCount={0}
    gameTime={0}
    onclick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

