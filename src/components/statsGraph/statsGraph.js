import { StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

export const StatsGraph = ({ series, sliceColor, title }) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.graphContainer}>
                 <PieChart
                widthAndHeight={250}
                series={series}
                sliceColor={sliceColor}
            />
            </View>
           
            <View style={styles.statRow}>
                <View style={{ backgroundColor: sliceColor[0], ...styles.square }} />
                <Text style={styles.squareText}>Tristeza {series[0]}%</Text>
            </View>
            <View style={styles.statRow}>
                <View style={{ backgroundColor: sliceColor[1], ...styles.square }} />
                <Text style={styles.squareText}>Alegría {series[1]}%</Text>
            </View>
            <View style={styles.statRow}>
                <View style={{ backgroundColor: sliceColor[2], ...styles.square }} />
                <Text style={styles.squareText}>Miedo {series[2]}%</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    graphContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    title: {
      fontSize: 25,
      fontFamily: "Oswald_400Regular",
      marginBottom: 10,
      textAlign: "center",
    },
    statRow: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 5,
    },
    square: {
      width: 20,
      height: 20,
      marginRight: 4
    },
    squareText: {
      fontSize: 18,
      fontFamily: "Oswald_400Regular",
    },
  });