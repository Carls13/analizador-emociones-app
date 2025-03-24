import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { router } from "expo-router";
 
const FormScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idCard: "",
  });

  const { fullName, email, phone, idCard } = formData;

  const isButtonDisabled = !fullName || !email || !phone || !idCard;
 
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
 
  const saveData = async () => {
    try {
      await AsyncStorage.setItem("formData", JSON.stringify(formData));

      router.push({ 
        pathname: '/record',
        params: { patient: JSON.stringify(formData) }
      });
    } catch (error) {
      console.log("Error saving data", error);}
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Paciente</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={formData.fullName}
        onChangeText={(text) => handleChange("fullName", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de contacto"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={(text) => handleChange("phone", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cédula de Identidad"
        keyboardType="numeric"
        value={formData.idCard}
        onChangeText={(text) => handleChange("idCard", text)}
      />
 
      <Button title="Continuar" disabled={isButtonDisabled} onPress={saveData} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
});
 
export default FormScreen;