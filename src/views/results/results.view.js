import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { EMOTIONS } from "../../data/emotions";

export function ResultsView({ route, navigation }) {
  console.log(route.params)

  const { prediction } = route.params;

  const predictionLabel = prediction.split(".wav")[0] || 'neutral';

  const emotionData = EMOTIONS[predictionLabel];

  const restartProcess = () => {
    navigation.navigate("Home")
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <StatusBar style="auto" />
        <Text style={styles.title}>Resultados</Text>
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
});
