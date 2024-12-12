import { Button, Text, View, StyleSheet, ScrollView, Platform } from "react-native";
import React, { useEffect, useState, useCallback} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';




export default  function History() {
  const [historyData, setHistoryData] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('value');
      setHistoryData(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch(e) {
      console.error("Failed to fetch the data from storage", e);
    }
  }

  const clearHistory = async () => {
    try {
      await AsyncStorage.removeItem('value');
    } catch(e) {
      console.error("Failed to clear the data from storage", e);
    }
  }
  

  useEffect(() => {
    getData();
  }, [getData]);
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>History Page</Text>
      <View style={styles.historyContainer}>
      {historyData.length > 0 ? (
          historyData.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Text style={styles.historyText}>
                <Text style={styles.bold}>Value:</Text> {item.value}
              </Text>
              <Text style={styles.historyText}>
                <Text style={styles.bold}>Time:</Text> {item.time}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.noHistoryText}>No history available</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Clear History" color="#FF4D4D" onPress={clearHistory} />
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
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
  },
  historyText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  bold: {
    fontWeight: '700',
  },
  noHistoryText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  historyItem: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

