import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Picker } from "@react-native-picker/picker";

const EMOTIONS = ["", "happy", "sad", "angry", "disgust", "neutral", "ps", "fear"];

import { EMOTIONS as EMOTIONS_DATA, EmotionsInterface } from "@/data/emotions";
import { router, useLocalSearchParams } from "expo-router";
 
interface Prediction {
  fullName: string;
  patient: {
    fullName: string;
    email: string;
    phone: string;
    idCard: string;
  };
  emotion: string;
  timestamp: string;
}
 
const HistoryScreen: React.FC = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [filteredPredictions, setFilteredPredictions] = useState<Prediction[]>([]);
  const [emotionFilter, setEmotionFilter] = useState("");
  const [patientFilter, setPatientFilter] = useState("");

  const params: any = useLocalSearchParams();
 
  useEffect(() => {
    loadPredictions();
  }, []);
 
  const loadPredictions = async () => {
    try {
      const storedData = await AsyncStorage.getItem("predictions");
      let data: Prediction[] = storedData ? JSON.parse(storedData) : [];
      data.reverse();
      setPredictions(data);

      if (params?.patient) {
        const currentPatient: string = Array.isArray(params.patient) ? params.patient[0] : params.patient;
        const parsedCurrentPatient = JSON.parse(currentPatient);

        data = data.filter((p) => p.patient.fullName === parsedCurrentPatient.fullName);
        setPatientFilter(parsedCurrentPatient.fullName);
      }

      setFilteredPredictions(data);
    } catch (error) {
      console.log("Error loading predictions", error);
    }
  };
 
  const applyFilters = () => {
    let filtered = predictions;

    if (emotionFilter) {
      filtered = filtered.filter((p) => p?.emotion?.toLowerCase().includes(emotionFilter?.toLowerCase()));
    }
    if (patientFilter) {
      filtered = filtered.filter((p) => p?.patient?.fullName?.toLowerCase().includes(patientFilter?.toLowerCase()));
    }
 
    setFilteredPredictions(filtered);
  };

  const handleGoHome = () => {
    router.push({ pathname: "/" });
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Predicciones</Text>
 
      <Picker
        prompt="Filtrar por Emoción"
        selectedValue={emotionFilter}
        onValueChange={(value) => setEmotionFilter(value)}
        style={styles.picker}
      >
        {EMOTIONS.map((emotion, index) => (
          <Picker.Item key={index} label={emotion ? EMOTIONS_DATA[emotion as keyof EmotionsInterface].title : "Todas"} value={emotion} />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Filtrar por Paciente"
        value={patientFilter}
        onChangeText={setPatientFilter}
      />

      <Button title="Aplicar Filtros" onPress={applyFilters} />

      <FlatList
        style={styles.list}
        data={filteredPredictions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.itemText}>
                <Text style={styles.bold}>Patient:</Text> {item.patient.fullName} ({item.patient.idCard})
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.bold}>Emotion:</Text> {String(EMOTIONS_DATA[item.emotion as keyof EmotionsInterface].title)}
              </Text>
              <Text style={styles.itemText}>
                <Text style={styles.bold}>Date:</Text> {new Date(item.timestamp).toLocaleString()}
              </Text>
            </View>
          )
      }}
      />
      <Button title="Volver a Inicio" onPress={handleGoHome} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  list: {
    marginBottom: 20,
    marginTop: 20,
  }
});
 
export default HistoryScreen;