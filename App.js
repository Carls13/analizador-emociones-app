import { useFonts, Oswald_400Regular, Oswald_600SemiBold } from '@expo-google-fonts/oswald';
import { Navigator } from './src/infrastructure/navigation/navigator';
import { Text, View } from 'react-native';

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular, Oswald_600SemiBold
  });

    if (!fontsLoaded) {
      return <View>
        <Text>Loading</Text>
      </View>;
    }

  return <Navigator />;
}
