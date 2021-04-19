import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import HomeScreen from './HomeScreen';

afterEach(() => cleanup());
const onPressMockNavigate = jest.fn();
describe('Testing HomeScreen rendering and components', () => {
  test('should render and click on a button to DetailsScreen', async () => {
    const component = (
      <NavigationContainer>
        <HomeScreen navigation={ { navigate: onPressMockNavigate } } />
      </NavigationContainer>
    );

    const { findByRole } = render(component);

    const homeProfileBtn = await findByRole(/button/i);

    fireEvent.press(homeProfileBtn);
    expect(onPressMockNavigate).toHaveBeenCalled();
    expect(onPressMockNavigate).toHaveBeenCalledTimes(1);
    expect(onPressMockNavigate).toHaveBeenCalledWith('Details');
  });
});
