import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { StatsGraph } from "../../components/statsGraph/statsGraph";

export function ResultsView() {
  const series = [50, 50, 50];
  const sliceColor = ["#2196F388", "#2196F399", "#2196F3BB"];

  return (
    <SafeAreaView style={{ paddingTop: 20 }}>
      <ScrollView>
        <StatusBar style="auto" />

        <Text style={styles.title}>Resultados</Text>

        <StatsGraph
          series={series}
          sliceColor={sliceColor}
          title="Primer Formante"
        />
        <StatsGraph
          series={series}
          sliceColor={sliceColor}
          title="Segundo Formante"
        />
        <StatsGraph
          series={series}
          sliceColor={sliceColor}
          title="Tercer Formante"
        />
        <StatsGraph
          series={series}
          sliceColor={sliceColor}
          title="Cuarto Formante"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "Oswald_400Regular",
    marginBottom: 20,
    textAlign: "center"
  },
});
