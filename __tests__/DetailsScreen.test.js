import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { render, cleanup } from '@testing-library/react-native';

import DetailsScreen from '../src/screens/DetailsScreen';

afterEach(() => cleanup());

it('renders correctly', () => {
  render(<DetailsScreen />);
});
