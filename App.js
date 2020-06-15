import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Vino');
  const [person, setPerson] = useState({ name: 'vinoth', age: 30 });

  const clickHandler = () => {
    setName('Kanna');
    setPerson({name:'Alamelu', age: 25})
  }

  return (
    <View style={styles.container}>
      <Text> My Name is {name}</Text>
      <Text> His Name is {person.name}</Text>
      <Text> His Age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  buttonContainer:{
    marginTop:20
  }
});
