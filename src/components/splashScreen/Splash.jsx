import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen2 = ({ navigation }) => {
  useEffect(() => {
    // Aquí puedes agregar cualquier lógica adicional que necesites antes de redirigir a la siguiente pantalla
    setTimeout(() => {
      navigation.navigate('Home'); // Cambia 'Home' por el nombre de tu siguiente pantalla
    }, 3000); // Cambia 3000 por la duración en milisegundos que deseas mostrar el splash screen
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/Lego2.json')} // Cambia './animation.json' por la ruta de tu archivo de animación Lottie
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen2;