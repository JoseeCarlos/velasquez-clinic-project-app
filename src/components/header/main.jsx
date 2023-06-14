import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

function Header({ navigation, title, leftAction, notificationCount }) {
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
          source={require('../../../assets/logo-white-le.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assets/logo-white-im.png')}
          style={styles.logoIm}
          resizeMode="contain"
        />
        </View>
      )}
      <TouchableOpacity style={styles.notificationsContainer} onPress={()=>{
        navigation.navigate('Notification');
      }} >
        <Ionicons name="notifications" size={28} color="#fff" />
        {notificationCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{notificationCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F9A13C',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
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
    width: 32,
    height: 32,
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
  badgeContainer: {
    backgroundColor: '#ff0000',
    position: 'absolute',
    borderRadius: 10,
    paddingHorizontal: 6,
    top: -5,
    right: -5,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff'
  },
});

export default Header;
