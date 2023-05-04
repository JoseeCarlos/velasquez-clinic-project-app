import React, { useState, setState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header({ navigation, title, leftAction }) {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={leftAction}>
          <Ionicons name="menu-outline" size={32} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F9A13C',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    
    //border color 
    borderColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default Header;