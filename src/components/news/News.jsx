import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

const News = ({ navigation }) => {
    const [filter, setFilter] = useState("all");
  const newsData = [
    {
      id: "1",
      title: "¡Última semana para presentar tu candidatura a los Premios...",
      description: "Descripción de la noticia 1",
      fecha: "13/06/2023",
      likes: 10,
      dislikes: 2,
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Ivoclar-escaner-PrograScan-PS7.png?alt=media&token=9d33ab3e-9a20-4b58-8485-c626aa188306",
    },
    {
      id: "2",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Dentistas_deteccion_cancer-oral.jpg?alt=media&token=4ada8136-952d-42e0-a67d-005dc52fd25a",
    },
    {
      id: "3",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Numero-dentistas-Espana.jpg?alt=media&token=b230cd1d-0abf-48fd-903c-5aadaf2157a6",
    },
    {
      id: "4",
      title: "10 consejos para preparar y mantener la salud bucal...",
      description: "Descripción de la noticia 2",
      fecha: "13/06/2023",
      likes: 5,
      dislikes: 1,
      image:
        "https://firebasestorage.googleapis.com/v0/b/parcial-gps-pm2.appspot.com/o/Tecnologia_Odontologia_SEPA-Sevilla23.jpg?alt=media&token=f66deb30-92ba-4b80-bdbb-f25e295ea150",
    },
    // Agrega más noticias según sea necesario
  ];

  const handleLike = (id) => {
    // Lógica para manejar el evento de "like" de la noticia con el ID proporcionado
    console.log(`Like clicked for news ${id}`);
  };

  const handleDislike = (id) => {
    // Lógica para manejar el evento de "dislike" de la noticia con el ID proporcionado
    console.log(`Dislike clicked for news ${id}`);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const renderNewsItem = ({ item }) => {
    return (
        <View style={styles.newsItem}>
        <Image source={{ uri: item.image }} style={styles.newsImage} />
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleLike(item.id)}>
            <Icon name="thumb-up" size={24} color="#61282d" />
          </TouchableOpacity>
          <Text style={styles.likeCount}>{item.likes}</Text>
          <TouchableOpacity onPress={() => handleDislike(item.id)}>
            <Icon name="thumb-down" size={24} color="#61282d" />
          </TouchableOpacity>
          <Text style={styles.dislikeCount}>{item.dislikes}</Text>
        </View>
      </View>
    );
  };
  const filteredTreatments = newsData.filter((treatment) => {
    if (filter === "all") {
      return true;
    } else {
      return treatment.category === filter;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Noticias y Promociones</Text>
        <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "all" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("all")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "all" && styles.activeFilterButtonText,
              ]}
            >
              Todos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "Endodoncia" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("Endodoncia")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "Endodoncia" && styles.activeFilterButtonText,
              ]}
            >
             Endodoncia
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              filter === "Prótesis Dental" && styles.activeFilterButton,
            ]}
            onPress={() => handleFilter("Prótesis Dental")}
          >
            <Text
              style={[
                styles.filterButtonText,
                filter === "Prótesis Dental" && styles.activeFilterButtonText,
              ]}
            >
              Prótesis Dental
            </Text>
          </TouchableOpacity>
        </View>
      {newsData.length > 0 ? (
       <View style={styles.listContainer}>
       <FlatList
         data={newsData}
         renderItem={renderNewsItem}
         keyExtractor={(item) => item.id}
       />
     </View>
      ) : (
        <Text>No hay noticias disponibles</Text>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: "relative",
    top: 0,
    backgroundColor: "#F9A13C",
    height: 85,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: -90,
    padding: 10,
  },
  headerButton: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  filterButton: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: "#dbd4d4",
  },
  activeFilterButton: {
    backgroundColor: "#61282D",
  },
  filterButtonText: {
    color: "#000",
    
  },
  activeFilterButtonText: {
    color: "#fff",
  },
  newsItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginHorizontal: 5,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10,
  },
  newsDescription: {
    fontSize: 14,
    marginTop: 5,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  likeCount: {
    marginLeft: 5,
    marginRight: 15,
  },
  dislikeCount: {
    marginLeft: 5,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default News;
