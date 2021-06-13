/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
        <StatusBar/>
        <Text style={{color: '#333333'}}>Home Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
