import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 17,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#61282D',
    borderRadius: 17,
    marginRight: 10,
    width: 92,
    height: 92,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center',
    textAlign: 'center'
  },
  content: {
    flex: 1
  }
});

export default Card;