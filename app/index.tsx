import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { router } from 'expo-router';
import { AppContainer } from '@/components/AppContainer';

export default function HomeView() {
  const handlePress = () => {
    console.log("Pressed!");
    router.push('/record');
  }

  return (
    <AppContainer>
      <Image style={styles.image} source={require("./../assets/images/logo-telecom.png")} />
      <Text style={styles.title}>Analizador de emociones</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonTitle}>Comenzar</Text>
      </TouchableOpacity>
      <Text style={styles.authorTitle}>Desarrollado por:</Text>
      <Text style={styles.author}>Carlos Hernández</Text>
      <Text style={styles.author}>Johander Parra</Text>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
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
    
  },
  authorTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
  }
});
