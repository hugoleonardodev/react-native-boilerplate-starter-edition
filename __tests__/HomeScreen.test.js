import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('changes to details screen when click on profile btn', () => {
  renderer.create(<App />);

  // const homeProfileBtn = getByTestId('home-details-btn')
});
