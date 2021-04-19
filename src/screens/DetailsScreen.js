import React from 'react';
import {
  View, Text, StatusBar,
} from 'react-native';

function DetailsScreen() {
  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      <StatusBar />
      <Text>Details Screen</Text>
    </View>
  );
}

export default DetailsScreen;
