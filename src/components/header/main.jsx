import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Header({ navigation, title, leftAction }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={leftAction}>
      <View style={styles.menuIconContainer}>
          <Image
            source={require('../../../assets/me.png')}
            style={styles.menuIcon}
            resizeMode="cover"
          />
        </View>    
      </TouchableOpacity>
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <View style={styles.logoContainer}>
          <Image
          source={require('../../../assets/logo-white-im.png')}
          style={styles.logoIm}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assets/logo-white-le.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        </View>
      )}
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
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 150,
    height: '100%',
  },
  logoIm: {
    width: 45,
    height: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: '100%',
  },
});

export default Header;
