import { Text, View,Button, TextInput, Switch,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Value() {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Value Page</Text>

            <View style={styles.switchContainerCentered}>
                <Text style={styles.label}>Temperature : 20°C</Text>
            </View>
            
            <SafeAreaView style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="20°C"
                    keyboardType="numeric"
                    placeholderTextColor="#888"
                />
                <Button title="Send" color="#007BFF" />
            </SafeAreaView>

            <View style={styles.section}>
              <Text style={styles.label}>Fan Control</Text>
              <View style={styles.switchContainer}>
                <View style={styles.switchItem}>
                  <Text style={styles.label}>Fan On</Text>
                  <Switch style={styles.switch} />
                </View>
              <View style={styles.switchItem}>
                  <Text style={styles.label}>Lamp On</Text>
                  <Switch style={styles.switch} />
              </View>
            </View>
      </View>

      <View style={styles.section}>
    <Text style={styles.label}>Automatic Mode</Text>
    <View style={styles.switchContainerCentered}>
        <Switch style={styles.switch} />
    </View>
</View>



            <View style={styles.section}>
                <Button title="ALL OFF" color="#FF4D4D" />
            </View>
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#f0f4ff',
      padding: 20,
      alignItems: 'center',
  },
  title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: 20,
      textAlign: 'center',
  },
  formContainer: {
      width: '100%',
      marginBottom: 20,
  },
  input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      marginBottom: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
  },
  section: {
      width: '100%',
      marginBottom: 20,
  },
  label: {
      fontSize: 16,
      color: '#333',
      marginBottom: 10,
  },
  switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 10,
  },
  switchItem: {
      alignItems: 'center',
      flex: 1,
  },
  switchContainerCentered: {
    alignItems: 'center',
  },
  switch: {
      marginTop: 5,
  }
});
