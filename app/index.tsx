import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Href, router } from 'expo-router';
import { AppContainer } from '@/components/AppContainer';

export default function HomeView() {
  const handlePress = () => {
    router.push('/save-patient');
  }
  
  const handleNavigateToHistory = () => {
    router.push('/history');
  }

  const handleNavigateToManual = () => {
    router.push('/manual' as Href);
  }

  return (
    <AppContainer>
      <Image style={styles.image} source={require("./../assets/images/logo-telecom.png")} />
      <Text style={styles.title}>Analizador de emociones</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonTitle}>Comenzar</Text>
      </TouchableOpacity>
      <Text onPress={handleNavigateToHistory} style={styles.historyLabel}>Ver historial</Text>
      <Text style={styles.authorTitle}>Desarrollado por:</Text>
      <Text style={styles.author}>Carlos Hernández</Text>
      <Text style={styles.author}>Johander Parra</Text>

      <Text onPress={handleNavigateToManual} style={styles.manual}>Guía de Usuario</Text>
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
    marginBottom: 20,
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
  },
  manual: {
    fontSize: 16,
    marginTop: 50,
    textDecorationLine: 'underline',
    color: '#0096FF',
  },
  historyLabel: {
    fontSize: 16,
    color: '#0096FF',
    textDecorationLine: 'underline',
    marginBottom: 70,
  },
});
