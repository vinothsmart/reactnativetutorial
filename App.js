import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  // const [name, setName] = useState('Vino');
  // const [age, setAge] = useState(30);
  // const [person, setPerson] = useState({ name: 'vinoth', age: 30 });

  // const clickHandler = () => {
  //   setName('Kanna');
  //   setPerson({name:'Alamelu', age: 25})
  // }

  const [people, setPeople] = useState([
    { name: "vinoth", id: "1" },
    { name: "kanna", id: "2" },
    { name: "ajitha", id: "3" },
    { name: "vignesh", id: "4" },
    { name: "anand", id: "5" },
    { name: "vivek", id: "6" },
    { name: "kali", id: "7" },
  ]);

  return (
    // <View style={styles.container}>
    //   <Text> My Name is {name}</Text>
    //   <Text> His Name is {person.name}</Text>
    //   <Text> His Age is {person.age}</Text>
    //   <View style={styles.buttonContainer}>
    //     <Button title='update state' onPress={clickHandler} />
    //   </View>
    // </View>
    // <View style={styles.container}>
    //   <Text>Enter name:</Text>
    //   <TextInput
    //     multiline
    //     style={styles.input}
    //     placeholder='e.g. Vinoth Kanna'
    //     onChangeText={(val) => setName(val)}/>

    //   <TextInput
    //     keyboardType='numeric'
    //     style={styles.input}
    //     placeholder='e.g. 30'
    //     onChangeText={(val) => setAge(val)}/>

    //   <Text>
    //     name: {name}, age: {age}
    //   </Text>
    // </View>
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        { people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // buttonContainer:{
  //   marginTop:20
  // }
  // input:{
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // }
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
