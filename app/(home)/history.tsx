import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

export default function History() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>History Page</Text>
      <View style={styles.historyContainer}>
        <Text style={styles.historyText}>Historique .....</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Clear History" color="#FF4D4D" />
      </View>
    </ScrollView>
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
  },
  historyContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    marginBottom: 20,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  }
});
