import { View, Text, StyleSheet } from 'react-native';



export default function Project() {


  return (
    <View style={styles.homescreen}>
      <Text style={styles.title}>Welcome to the Project.</Text>
      <Text style={styles.justifiedText}>
        This year, as part of a multidisciplinary project 3, I have started a project on temperature control. The principle of this project is the integration of hardware and software components to create an efficient and autonomous system.
      </Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#3b3b3b',
    marginBottom: 20,
    textAlign: 'center',
  },
  justifiedText: {
    textAlign: 'justify',
    lineHeight: 24,
    fontSize: 18,
    color: '#4a4a4a',
    marginVertical: 15,
  },
  separator: {
    marginTop: 30,
    width: '100%',
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});