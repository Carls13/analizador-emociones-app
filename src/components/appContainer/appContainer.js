import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

export function AppContainer({ children }) {
  return (
    <View style={styles.container}>
      {children}
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
    }
});
