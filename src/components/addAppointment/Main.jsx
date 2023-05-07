import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  Pressable,
} from "react-native";
import Header from "../header/main";
import DateTimePicker from "@react-native-community/datetimepicker";
import AppointmentModal from "./components/AppointmentModal";
import DoctorModal from "./components/DoctorModal";

const AddAppointment = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [dateS, setDateS] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [showDoctor, setShowDoctor] = useState(false);


  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      setShow(false);
      setDate(selectedDate);
      setDateS(selectedDate.toString().substr(4, 12));
    } else {
      setShow(false);
    }
  };

  const showDatepicker = () => {
    setShow(true);
    setMode("date");
    console.log("nasdjsd");
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Nueva cita" />
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nombre de la cita"
            placeholderTextColor="#777"
          />
        </View>
        <Text style={styles.label}>Seleccionar doctor</Text>
        <Pressable onPress={() => setShowDoctor(true)}>
          <TextInput
            style={styles.input}
            placeholder="Dr. Juan Perez"
            value={selectTime}
            onChangeText={(text) => setTime(text)}
            placeholderTextColor="#777"
            editable={false}
          />
        </Pressable>
        <DoctorModal
          visible={showDoctor}
          onClose={setShowDoctor}
        />

        <Text style={styles.label}>Fecha</Text>
        <Pressable onPress={showDatepicker}>
          <TextInput
            style={styles.input}
            placeholder="Sat Aug 21 2004"
            value={dateS}
            onChangeText={(text) => setDate(text)}
            placeholderTextColor="#777"
            editable={false}
          />
        </Pressable>
        <Text style={styles.label}>Horario</Text>
        <Pressable onPress={() => setShowModal(true)}>
          <TextInput
            style={styles.input}
            placeholder="9:00 AM"
            value={selectTime}
            onChangeText={(text) => setTime(text)}
            placeholderTextColor="#777"
            editable={false}
          />
        </Pressable>
        <AppointmentModal
          visible={showModal}
          onclose={setShowModal}
          setSelectTime={setSelectTime}
          date={dateS}
        />

        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            display="spinner"
            minimumDate={new Date()}
            maximumDate={
              new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
            }
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  form: {
    marginTop: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dateInput: {
    height: 40,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  dateText: {
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    backgroundColor: "#6BBE9C",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#61282D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AddAppointment;
