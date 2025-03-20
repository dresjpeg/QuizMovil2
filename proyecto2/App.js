import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=M1uwZmRTQ9jgKY6Qq3yqQweXVvgshix6lvT5DiZR')
    .then((response) => response.json())
    .then((json) => setData(json.near_earth_objects))
    // .them(console.log(json))
    .catch((error) => console.error(error));
  }, [])

  const Item = ({ name, id }) => (
      <View style={styles.item}>
        <Text style={styles.title}>ID: {id}</Text>
        <Text style={styles.title}>Nombre: {name}</Text>
      </View>
  );

  return (
    <View style={styles.container}>
      <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item name={item.name} id={item.id} />}
        keyExtractor={item => item.id.toString()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 5,
    justifyContent: 'space-around',
  },

  item:{
    borderColor: 'black',
    borderRadius: '2px',
    borderWidth: '0.5px',
    backgroundColor: 'black',
    borderColor: 'white',
  },
  
  title: {
    fontFamily: '',
    fontSize: 16,
    color: 'white',
  },
})