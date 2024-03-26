import { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { AppContainer } from "../../components/appContainer/appContainer";

export function RecordView({ navigation }) {
  const [recording, setRecording] = useState();
  const [isPlaying, setIsPlaying] = useState();
  const [recordedURI, setRecordedURI] = useState("");

  const audioPlayer = useRef(new Audio.Sound());

  useEffect(() => {
    const requestPermission = async () => {
      await Audio.requestPermissionsAsync();
    };

    requestPermission();
  }, []);

  const handleContinue = () => {
    console.log("Go to next view");
    navigation.navigate("Results");
  };

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setRecordedURI(uri);
    console.log("Recording stopped and stored at", uri);
  }

  // Function to play the recorded audio
  const playRecordedAudio = async () => {
    try {
      // Load the Recorded URI
      await audioPlayer.current.loadAsync({ uri: recordedURI }, {}, true);

      // Get Player Status
      const playerStatus = await audioPlayer.current.getStatusAsync();

      // Play if song is loaded successfully
      if (playerStatus.isLoaded) {
        if (playerStatus.isPlaying === false) {
          audioPlayer.current.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {}
  };

  // Function to stop the playing audio
  const stopPlaying = async () => {
    try {
      //Get Player Status
      const playerStatus = await audioPlayer.current.getStatusAsync();

      // If song is playing then stop it
      if (playerStatus.isLoaded === true)
        await audioPlayer.current.unloadAsync();

      setIsPlaying(false);
    } catch (error) {}
  };

  return (
    <AppContainer>
      {!recordedURI && (
        <>
          <Text style={styles.stepTitle}>Paso 1: </Text>
          <Text style={styles.stepInstructions}>
            Graba una nota de voz que quieras analizar
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={recording ? stopRecording : startRecording}
          >
            <Text style={styles.buttonTitle}>
              {recording ? "Detener" : "Grabar"}
            </Text>
          </TouchableOpacity>
        </>
      )}
      {recordedURI && (
        <>
          <Text style={styles.stepTitle}>Paso 2: </Text>
          <Text style={styles.stepInstructions}>
            Escucha la grabación y confirma que quieres continuar
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={isPlaying ? stopPlaying : playRecordedAudio}
          >
            <Text style={styles.buttonTitle}>
              {isPlaying ? "Pausar" : "Escuchar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonTitle}>Continuar</Text>
          </TouchableOpacity>
        </>
      )}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  stepTitle: {
    fontSize: 18,
    fontFamily: "Oswald_600SemiBold",
  },
  stepInstructions: {
    fontSize: 16,
    fontFamily: "Oswald_400Regular",
    marginBottom: 20,
  },
  button: {
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0096FF",
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonTitle: {
    fontSize: 18,
    color: "white",
    fontFamily: "Oswald_400Regular",
  },
});
