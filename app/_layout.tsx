import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false
      }} />
      <Stack.Screen name="record" options={{
        headerShown: false
      }} />
      <Stack.Screen name="results" options={{
        headerShown: false
      }} />
      <Stack.Screen name="manual" options={{
        headerShown: false
      }} />
    </Stack>
  );
}
