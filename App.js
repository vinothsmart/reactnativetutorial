import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Vino');

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Vinoth <Text>Kanna !!!</Text></Text>
        <Text>Kanna</Text>
        <Text>React Native App</Text>
      </View> */}
      <Text> My Name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: 'yellow',
    padding:20,
  }
});
