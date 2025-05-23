import { useState, useRef, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View, ActivityIndicator } from "react-native";
import { Audio } from "expo-av";
import {
  IOSOutputFormat,
  Recording,
} from 'expo-av/build/Audio';
import axios from "axios";
import { AppContainer } from "@/components/AppContainer";
import { router, useLocalSearchParams } from "expo-router";

export default function RecordView() {
  const [recording, setRecording] = useState<null | Recording>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [recordedURI, setRecordedURI] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const audioPlayer = useRef(new Audio.Sound());

  const params: any = useLocalSearchParams();

  // utitlity function to convert BLOB to BASE64
  const blobToBase64 = (blob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  useEffect(() => {
    const requestPermission = async () => {
      await Audio.requestPermissionsAsync();
    };

    requestPermission();
  }, []);

  const handleRestart = () => {
    setRecordedURI("");
  }

  const handleContinue = async () => {
    try {
      setLoading(true);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", recordedURI, true);
        xhr.send(null);
      });
  
      let audioBase64 = await blobToBase64(blob);
      audioBase64 = (audioBase64 as string).split(',')[1];
  
      const conversionBody = {
        file: audioBase64,
      };
  
      const conversionResponse = await axios.post("https://caring-passion-production-27f1.up.railway.app/convert", conversionBody);
  
      const convertedWAVFile = conversionResponse.data.file;

      const emotionBody = {
        audio_data: convertedWAVFile
      }

      const emotionResponse = await axios.post("https://analizador-emociones-backend-production.up.railway.app/detectar", emotionBody);

      const { prediction } = emotionResponse.data;

      const patient: string = params.patient;

      router.push(({ pathname: "/results", params: { prediction, patient } }));
  
    } catch (error: any) {
      console.log(error.message)
      setLoading(false);
    }
  };

  async function startRecording() {
    try {
      console.log("Requesting permissions..");
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log("Starting recording..");
      const { ios, android, web } = Audio.RecordingOptionsPresets.HIGH_QUALITY;
      const { recording } = await Audio.Recording.createAsync({ 
        android: {
          ...android,
          extension: '.wav', 
        }, 
        ios: { 
          ...ios,
          extension: '.wav', 
          outputFormat: IOSOutputFormat.MPEG4AAC 
        } ,
        web
      }); 
      setRecording(recording);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    setRecordedURI(uri as string);
    setRecording(null);
    console.log("Recording stopped and stored at", uri);
  }

  // Function to play the recorded audio
  const playRecordedAudio = async () => {
    try {
      // Load the Recorded URI
      await audioPlayer.current.loadAsync({ uri: recordedURI }, {}, true);

      // Get Player Status
      const playerStatus = await audioPlayer.current.getStatusAsync();

      if (playerStatus.isLoaded) {
        const { durationMillis } = playerStatus;

        // Play if song is loaded successfully
        if (playerStatus.isPlaying === false) {
          audioPlayer.current.playAsync();
          setIsPlaying(true);
        }

        // Stop playing when audio finishes
        setTimeout(() => {
          stopPlaying();
        }, durationMillis);
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
            style={styles.recordButton}
            onPress={recording ? stopRecording : startRecording}
          >
            <Image style={styles.recordImage} source={recording ? require("./../assets/images/stop.png") : require("./../assets/images/microphone.png")  } />
          </TouchableOpacity>
        </>
      )}
      {recordedURI && (
        <>
          <Text style={styles.stepTitle}>Paso 2: </Text>
          <Text style={styles.stepInstructions}>
            Escucha la grabación y, en caso de que quieras volver a grabar, presiona el botón de reiniciar
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={isPlaying ? stopPlaying : playRecordedAudio}
            >
              <Image style={styles.actionImage} source={isPlaying ? require("./../assets/images/pause.png") : require("./../assets/images/play.png")  } />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={handleRestart}>
              <Image style={styles.actionImage} source={require("./../assets/images/restart.png")} />
            </TouchableOpacity>
          </View>
          <Text style={styles.stepInstructions}>
            Una vez estés conforme con la grabación, presiona Continuar para proceder con el análisis
          </Text>
          {
            loading ? <ActivityIndicator color={"#0096FF"} size="large" /> :
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonTitle}>Continuar</Text>
            </TouchableOpacity>
          }
        </>
      )}
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  stepInstructions: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    width: 300
  },
  recordButton: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0096FF",
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  actionButton: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0096FF",
    borderRadius: 70,
    marginBottom: 20,
  },
  recordImage: {
    width: 100,
    height: 100,
  },
  actionImage: {
    width: 50,
    height: 50,
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
  },
});
