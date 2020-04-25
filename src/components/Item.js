import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Item({ title }) {
    return(
        <View style={styles.containerView}>
            <Text style={styles.itemTitle}>
                {title}
            </Text>
        </View>
    )
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
        borderTopColor: 'purple'
    }
})

export default Item;
