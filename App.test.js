import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { render, cleanup } from '@testing-library/react-native';

import App from './App';

afterEach(() => cleanup());

it('renders correctly', () => {
  render(<App />);
});
