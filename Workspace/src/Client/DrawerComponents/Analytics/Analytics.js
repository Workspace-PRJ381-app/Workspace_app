import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Analytics= () => {

    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
