import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const UserScreen = () => {
  const [users, setUsers] = useState([{
    id: '1',
    name: 'John Doe',
    email: 'john@example.com'
  }, {
    id: '2',
    name: 'Jane Doe',
    email: 'jane@example.com'
  }, {
    id: '3',
    name: 'Bob Smith',
    email: 'bob@example.com'
  } // Add more users as needed
  ]);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
    color: '#888'
  }
});
export default UserScreen;