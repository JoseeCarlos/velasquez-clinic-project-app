import React from "react";
import { View, ScrollView, StyleSheet, Text, Image } from "react-native";

const NewsComponent = () => {
  const newsData = [
    {
      id: 1,
      title: "¡Gran apertura de nuestra nueva clínica!",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Numero-dentistas-Espana.jpg?alt=media&token=b230cd1d-0abf-48fd-903c-5aadaf2157a6",
    },
    {
      id: 2,
      title: "Nuevos servicios disponibles",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a",
    },
    {
      id: 3,
      title: "Descuento especial en exámenes médicos",
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Ivoclar-escaner-PrograScan-PS7.png?alt=media&token=9d33ab3e-9a20-4b58-8485-c626aa188306",
    },
    // Agrega más objetos de noticias según sea necesario
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {newsData.map((item) => (
        <View style={styles.card} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: 300,
    marginRight: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
   
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 15,

  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NewsComponent;
