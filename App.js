import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Oswald_400Regular, Oswald_600SemiBold } from '@expo-google-fonts/oswald';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular, Oswald_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  const handlePress = () => {
    console.log("Pressed!");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo-telecom.png")} />
      <Text style={styles.title}>Analizador de emociones</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonTitle}>Comenzar</Text>
      </TouchableOpacity>
      <Text style={styles.authorTitle}>Desarrollado por:</Text>
      <Text style={styles.author}>Carlos Hernández</Text>
      <Text style={styles.author}>Johander Parra</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Oswald_400Regular',
    marginBottom: 50,
  },
  button: {
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 8,
    marginBottom: 100,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Oswald_400Regular',
  },
  authorTitle: {
    fontSize: 18,
    fontFamily: 'Oswald_400Regular',
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    fontFamily: 'Oswald_400Regular',
  }
});
