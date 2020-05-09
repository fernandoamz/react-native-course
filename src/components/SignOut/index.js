import React from 'react';
import {View, Button} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import AsyncStorage from '@react-native-community/async-storage';

function SignOut(props) {
  LogOut = () => {
    AsyncStorage.clear();
    props.navigation.navigate('StartSession');
  };

  return (
    <View style={{margin: 20}}>
      <Button onPress={() => LogOut()} title="Close" color="#000" />
    </View>
  );
}

export default withNavigation(SignOut);
