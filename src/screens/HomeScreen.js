import React from 'react';
import {
  View, Text, Button, StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

function HomeScreen({ navigation }) {
  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <StatusBar />
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={ () => navigation.navigate('Details') }
        data-testid="home-details-btn"
      />
    </View>
  );
}

HomeScreen.propTypes = PropTypes.shape({
  navigation: PropTypes.func,
  replace: PropTypes.func,
  push: PropTypes.func,
  pop: PropTypes.func,
  popToTop: PropTypes.func,
  goBack: PropTypes.func,
  navigate: PropTypes.func,
  reset: PropTypes.func,
  setParams: PropTypes.func,
  dispatch: [PropTypes.func],
  isFocused: [PropTypes.func],
  canGoBack: [PropTypes.func],
  dangerouslyGetParent: [PropTypes.func],
  dangerouslyGetState: PropTypes.func,
  addListener: [PropTypes.func],
  removeListener: [PropTypes.func],
  setOptions: [PropTypes.func],
}).isRequired;

export default HomeScreen;
