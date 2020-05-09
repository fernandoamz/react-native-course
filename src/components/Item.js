import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Item({title, onPressDelete}) {
  return (
    <TouchableOpacity onPress={() => onPressDelete()}>
      <View style={styles.containerView}>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 20,
    fontFamily: 'Courier',
    color: 'white',
    fontWeight: 'bold',
  },
  containerView: {
    margin: 20,
    width: 200,
    backgroundColor: 'navy',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});

export default Item;
