import React from 'react';
import {Text, Button, StyleSheet, View} from 'react-native';

function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Menu Users</Text>
      <View style={styles.subContainer}>
        <Button
          title="Lista Usuarios"
          onPress={() => navigation.navigate('UserList')}
        />
      </View>
      <View style={styles.subContainer}>
        <Button
          title="Crear usuarios"
          onPress={() => navigation.navigate('CreateUser')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    margin: 20,
  },
});

export default Users;
