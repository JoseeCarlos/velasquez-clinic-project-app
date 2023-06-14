import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import DoctorCard from "./CardDoctor";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const DoctorModal = ({ visible, onClose }) => {
  const doctors = [
    {
      name: "Dr. Juan Pérez",
      specialty: "Cardiología",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Dra. María González",
      specialty: "Pediatría",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Dr. José Ramírez",
      specialty: "Dermatología",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  const [searchItem, setSearchItem] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleCloseModal = () => {
    setSearchItem(''); 
    onClose(false);
  };

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(searchItem.toLowerCase());
      })
    );
  }, [searchItem]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View styles={styles.titleContainer}>
          <Text style={styles.title}>Seleccionar doctor</Text>
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={16}
              color="#aaa"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar doctor..."
              value={searchItem}
              onChangeText={setSearchItem}
            />
          </View>
        </View>
        
        <ScrollView contentContainerStyle={styles.doctorsContent} >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.name}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
              rating={4.5}
              onPress={() => alert("Doctor seleccionado")}
            />
          ))
        ) : (
          <Text style={styles.noResultsText}>No se encontraron resultados</Text>
        )}
        </ScrollView>
        
        
        <View>
          <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchIcon: {
    marginRight: 16,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    textAlign: "center",
  },
  doctorContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#555",
  },
  titleContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  noResultsText :{
    fontSize: 16,
    textAlign: 'center'
  },
  doctorsContent: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignContent: 'center',
    alignItems: 'center'


  }
});

export default DoctorModal;
