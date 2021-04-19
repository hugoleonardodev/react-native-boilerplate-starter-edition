import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent, cleanup } from '@testing-library/react-native';

import HomeScreen from '../src/screens/HomeScreen';

afterEach(() => cleanup());
const onPressMock = jest.fn();
describe('Testing HomeScreen rendering and components', () => {
  test('should render and click on a button to DetailsScreen', async () => {
    const component = (
      <NavigationContainer>
        <HomeScreen navigation={ { navigate: onPressMock } } />
      </NavigationContainer>
    );

    const { findByRole } = render(component);

    const homeProfileBtn1 = await findByRole(/button/i);

    fireEvent.press(homeProfileBtn1);
    expect(onPressMock).toHaveBeenCalled();
    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith('Details');
  });
});
