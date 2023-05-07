import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import DoctorCard from "./CardDoctor";

const DoctorModal = ({ visible, onClose }) => {
  const doctors = [
    {
      name: "Dr. Juan Pérez",
      specialty: "Cardiología",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dra. María González",
      specialty: "Pediatría",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. José Ramírez",
      specialty: "Dermatología",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View styles={styles.titleContainer}>
          <Text style={styles.title}>Seleccionar doctor</Text>
        </View>
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.name}
            name={doctor.name}
            specialty={doctor.specialty}
            image={doctor.image}
            onPress={() => onClose(false)}
          />
        ))}
        <View>
          <TouchableOpacity onPress={() => onClose(false)}>
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
});

export default DoctorModal;
