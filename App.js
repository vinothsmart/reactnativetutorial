import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Vino');
  const [age, setAge] = useState(30);
  // const [person, setPerson] = useState({ name: 'vinoth', age: 30 });

  // const clickHandler = () => {
  //   setName('Kanna');
  //   setPerson({name:'Alamelu', age: 25})
  // }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder='e.g. Vinoth Kanna'
        onChangeText={(val) => setName(val)}/>
      
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)}/>

      <Text>
        name: {name}, age: {age}
      </Text>
      {/* <Text> My Name is {name}</Text>
      <Text> His Name is {person.name}</Text>
      <Text> His Age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View> */}
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
  // buttonContainer:{
  //   marginTop:20
  // }
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
