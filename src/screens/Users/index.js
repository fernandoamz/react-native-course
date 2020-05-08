import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  getUserData = () => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch(err => err);
  };

  return (
    <View style={styles.container}>
      <Text>Hello Users</Text>
      <Button title="Get user data" onPress={() => getUserData()} />
      <ScrollView>
        {users.map(user => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: 'white',
                margin: 10,
                borderRadius: 10,
              }}
            >
              <View style={{ margin: 20 }}>
                <Image
                  source={{uri: user.avatar}}
                  style={{width: 100, height: 100, borderRadius: 100 }}
                />
              </View>
              <View style={{ margin: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  {`Name: ${user.first_name} ${user.last_name}`}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  {`Email: ${user.email}`}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Users;
