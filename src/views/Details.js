import React from 'react';
import {Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
      <View style={styles.row}>
          <Text style={ styles.text } >Детальная информация о товаре</Text>
          <Button onPress={() => navigation.navigate('Home')} title="Список товаров"></Button>
      </View>
    );
}

const styles = StyleSheet.create({
  row: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  text: {
      fontSize: 20,
      color: '#ff5599'
  }
});

export default DetailsScreen;