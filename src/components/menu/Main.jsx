
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Menu({ isOpen, navigation, toggleMenu }) {
  if (!isOpen) {
    return null;
  }

  return (
    <View style={styles.sideMenu}>
      <TouchableOpacity onPress={toggleMenu}>
        <Ionicons name="close-outline" size={32} color="#fff" style={styles.closeIcon} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('../../../assets/empty_image.png')}
        />
        <Text style={styles.profileName}>Juan Perez</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.menuItem}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.menuItem}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Help')}>
        <Text style={styles.menuItem}>Ayuda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sideMenu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    color: '#000'
  },
  header: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    // Agregar otras propiedades de estilo según se necesite
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  menuItem: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default Menu;