import { StatusBar } from "expo-status-bar";
import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

export function AppContainer(props: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {props.children}
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
