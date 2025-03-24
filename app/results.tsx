import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { EMOTIONS } from "@/data/emotions";
import { router, useLocalSearchParams } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

enum EmotionsEnum {
  "happy", "sad", "angry", "disgust", "neutral", "ps", "fear"
}
type Emotion = keyof typeof EmotionsEnum;

export default function ResultsView() {
  const params: any = useLocalSearchParams();

  const predictionLabel: Emotion = params.prediction.split(".wav")[0] || 'neutral';

  const emotionData = EMOTIONS[predictionLabel];

  let currentPatient = params.patient;
  currentPatient = JSON.parse(currentPatient);

  const savePrediction = async (emotion: string) => {
    try {
      const newEntry = { patient: currentPatient, emotion, timestamp: new Date().toISOString() };
   
      const storedData = await AsyncStorage.getItem("predictions");
      const predictions = storedData ? JSON.parse(storedData) : [];
   
      predictions.push(newEntry);
      await AsyncStorage.setItem("predictions", JSON.stringify(predictions));
   
    } catch (error) {
      console.log("Error saving prediction", error);
    }
  };

  useEffect(() => {
    savePrediction(predictionLabel);
  }, []);

  const restartProcess = () => {
    router.push({ 
      pathname: '/'
     });
  }

  const handleHistoryNavigation = () => {
    router.push({ 
      pathname: '/history',
      params: { patient: JSON.stringify(currentPatient) }
    });
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>Resultados</Text>
        {
          currentPatient && <>
            <Text style={styles.emotionTitle}>Paciente</Text>
            <View style={styles.patientDataRow}>
              <Text style={styles.labelPatientData}>Nombre: </Text>
              <Text style={styles.emotionText}>{currentPatient.fullName}</Text>
            </View>         
            <View style={styles.patientDataRow}>
              <Text style={styles.labelPatientData}>Correo: </Text>
              <Text style={styles.emotionText}>{currentPatient.email}</Text>
            </View>
            <View style={styles.patientDataRow}>
              <Text style={styles.labelPatientData}>Teléfono: </Text>
              <Text style={styles.emotionText}>{currentPatient.phone}</Text>
            </View>
            <View style={styles.patientDataRow}>
              <Text style={styles.labelPatientData}>Cédula: </Text>
              <Text style={styles.emotionText}>{currentPatient.idCard}</Text>
            </View>
          </>
        }
        {
          predictionLabel && <>
            <Text style={styles.emotionTitle}>{emotionData.title}</Text>
            <Image style={styles.image} source={emotionData.image} />
            {
              emotionData.description.map((paragraph, i) => {
                return <Text key={i} style={styles.emotionText}>{paragraph}</Text>;
              })
            }
          </>  
        }
        <Text style={styles.historyLabel} onPress={handleHistoryNavigation}>Ver historial de paciente</Text>
        
        <TouchableOpacity
            style={styles.button}
            onPress={restartProcess}
          >
          <Text style={styles.buttonTitle}>Reiniciar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    marginBottom: 30,
    textAlign: "center"
  },
  emotionTitle: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold"
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    display: 'flex',
    margin: "auto"
  },
  emotionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left"
  },
  button: {
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 8,
    margin: "auto",
    marginTop: 50
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
  patientDataRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 0
  },
  labelPatientData: {
    fontWeight: "bold"
  },
  historyLabel: {
    fontSize: 16,
    color: '#0096FF',
    textDecorationLine: 'underline',
    textAlign: "center"
  },
});
