import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(home)"  options={{ headerShown: false }}/>
      </Stack>
    </ThemeProvider>
  );
}
