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
    backgroundColor: 'navy',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 10,
    borderTopColor: 'purple',
  },
});

export default Item;
