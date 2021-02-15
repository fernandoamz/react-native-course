import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Index({ navigation }) {
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@stored_token');
      if(value !== null) {
        navigation.navigate('MainMenu');
      } else {
        navigation.navigate('StartSession');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => getData(), []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.imagen}
      />
      <Text style={styles.texto}>Cargando ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'navy',
  },
  imagen: {
    width: 100,
    height: 100,
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Index;
