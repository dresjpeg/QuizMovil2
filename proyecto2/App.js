import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=M1uwZmRTQ9jgKY6Qq3yqQweXVvgshix6lvT5DiZR')
    .then((response) => response.json())
    .then((json) => setData(json.near_earth_objects))
    // .them(console.log(json.near_earth_objects))
    .catch((error) => console.error(error));
  }, [])

  const Item = ({ name, id }) => (
    <View style={styles.item}>
      <View key={id}>
        <Text style={styles.title}>ID: {id}</Text>
        <Text style={styles.title}>Nombre: {name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:  'row'
  },

  item:{
    borderColor: 'black',
    borderRadius: '2px',
    borderWidth: '2px'
  },
  title:{
    fontFamily: '',
    fontSize: 16,
    

  }
});
