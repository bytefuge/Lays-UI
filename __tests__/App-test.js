import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import App from '../App';

// widget testing 

import ActivityIndicator from '../src/widgets/ActivityIndicator';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('ActivityIndicator', () => {
  const tree = renderer.create(<ActivityIndicator />);
  expect(tree).toMatchSnapshot();
});