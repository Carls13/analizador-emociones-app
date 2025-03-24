import { router } from 'expo-router';
import React from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

export default function UserManualScreen() {
  const handleGoBack = () => {
    router.back();
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <Text style={styles.title}>Manual de Usuario</Text>
        <Text style={styles.subtitle}>Aplicación de Detección de Emociones mediante la Voz</Text>
        
        <Text style={styles.sectionTitle}>Introducción</Text>
        <Text style={styles.text}>
          La aplicación de detección de emociones mediante la voz es una herramienta diseñada para
          identificar el estado emocional de un usuario a partir del análisis de su voz.
        </Text>
        
        <Text style={styles.sectionTitle}>Requisitos del Sistema</Text>
        <Text style={styles.text}>- Sistema Operativo: Android.</Text>
        <Text style={styles.text}>- Memoria RAM: Mínimo 2GB.</Text>
        <Text style={styles.text}>- Micrófono: Integrado o externo.</Text>
        <Text style={styles.text}>- Conexión a Internet: Requerida para la sincronización de datos y actualizaciones.</Text>
        
        <Text style={styles.sectionTitle}>Uso de la Aplicación</Text>
        <Text style={styles.boldText}>1. Inicio</Text>
        <Text style={styles.text}>- Abra la aplicación.</Text>
        <Text style={styles.text}>- De click al botón "Comenzar" de la vista de inicio.</Text>
        
        <Text style={styles.boldText}>2. Registro del Paciente</Text>
        <Text style={styles.text}>- Antes de grabar una emoción, se debe registrar al paciente.</Text>
        <Text style={styles.text}>- Ingrese los datos del paciente: Nombre completo, correo, teléfono de contacto y cédula de identidad.</Text>
        <Text style={styles.text}>- Una vez completado el formulario, presione "Guardar" para almacenar la información.</Text>
        
        <Text style={styles.boldText}>3. Grabación de Voz</Text>
        <Text style={styles.text}>- Presione el botón de grabación.</Text>
        <Text style={styles.text}>- Conceda los permisos necesarios del dispositivo para poder grabar.</Text>
        <Text style={styles.text}>- Hable de manera natural durante al menos 5 segundos.</Text>
        <Text style={styles.text}>- Detenga la grabación cuando finalice su mensaje.</Text>
        
        <Text style={styles.boldText}>4. Confirmación</Text>
        <Text style={styles.text}>- Si está de acuerdo con la grabación, proceda a enviar los resultados utilizando el botón "Continuar".</Text>
        <Text style={styles.text}>- Si no está de acuerdo, presione el botón de reiniciar para volver a grabar.</Text>
        
        <Text style={styles.boldText}>5. Análisis de Emoción</Text>
        <Text style={styles.text}>- La aplicación mostrará el resultado con la emoción detectada.</Text>
        <Text style={styles.text}>- Emociones posibles: felicidad, tristeza, ira, sorpresa, disgusto, miedo y neutral.</Text>
        
        <Text style={styles.boldText}>6. Uso del Módulo de Historial</Text>
        <Text style={styles.text}>- Para ver las predicciones almacenadas, acceda a la sección de "Historial".</Text>
        <Text style={styles.text}>- Puede filtrar las predicciones por paciente o por emoción detectada.</Text>
        <Text style={styles.text}>- Cada registro mostrará el nombre del paciente, la emoción detectada y la fecha del análisis.</Text>
        <Text style={styles.text}>- Para actualizar la lista de predicciones, deslice hacia abajo en la pantalla del historial.</Text>
        
        <Text style={styles.sectionTitle}>Solución de Problemas</Text>
        <Text style={styles.boldText}>No se detecta la voz</Text>
        <Text style={styles.text}>- Verifique que el micrófono esté funcionando correctamente.</Text>
        <Text style={styles.text}>- Asegúrese de haber concedido permisos a la aplicación.</Text>
        
        <Text style={styles.boldText}>Resultados inexactos</Text>
        <Text style={styles.text}>- Intente hablar con un tono claro y sin ruidos de fondo.</Text>
        <Text style={styles.text}>- Verifique su conexión a Internet.</Text>
        <Text style={styles.text}>- La aplicación no es 100% infalible. Se debe tener precaución con su uso</Text>
        
        <Text style={styles.sectionTitle}>Contacto y Soporte</Text>
        <Text style={styles.text}>Para asistencia técnica, contacte con nuestro equipo a través de +58 424-4407727/+58 412-2277713.</Text>
      
        <TouchableOpacity style={styles.button} onPress={handleGoBack}>
          <Text style={styles.buttonTitle}>Aceptar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0096FF',
    borderRadius: 8,
    marginTop: 50,
    marginHorizontal: "auto",
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
  },
});
