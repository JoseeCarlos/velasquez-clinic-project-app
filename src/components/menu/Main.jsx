import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Menu({ isOpen, navigation, toggleMenu }) {
  return (
    <>
      {isOpen && <View style={styles.overlay} />}
      <View style={[styles.sideMenu, isOpen && styles.open]}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons
            name="close-outline"
            size={32}
            color="#1DA1F2"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={require("../../../assets/me.png")}
            resizeMode="cover"
          />
          <View style={styles.userInfo}>
            <Text style={styles.profileName}>Juan Perez</Text>
            <Text style={styles.username}>juanperez</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <View style={styles.menuItemContainer}>
            <Ionicons
              name="person-circle-outline"
              size={24}
              color="#1DA1F2"
              style={styles.menuItemIcon}
            />
            <Text style={styles.menuItem}>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
          <Text style={styles.menuItem}>Listas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Topics")}>
          <Text style={styles.menuItem}>Temas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text style={styles.menuItem}>Configuración y privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Help")}>
          <Text style={styles.menuItem}>Centro de ayuda</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#000",
    opacity: 0.5,
  },
  sideMenu: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "90%",
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 20,
    zIndex: 1,
    transform: [{ translateX: -400 }],
  },
  open: {
    transform: [{ translateX: 0 }],
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
    color: "#000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userInfo: {
    marginLeft: 15,
  },
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemIcon: {
    marginRight: 10,
    color: '#000'
  },
  profileName: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  username: {
    color: "#A7A7A7",
    fontSize: 14,
    marginTop: 5,
  },
  menuItem: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
});

export default Menu;
