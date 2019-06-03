import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app/app.jsx';

const mock = {
  settings: {
    gameTime: 0,
    errorCount: 0
  },
  questions: []
};

it(`App correctly rendered`, () => {
  const tree = renderer
  .create(<App
    settings={mock.settings}
    questions={mock.questions}
    onClick={jest.fn()}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

