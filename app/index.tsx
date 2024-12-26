import { Text, View, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";

type ParamList = {
    '(home)': undefined;
}

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigation<NavigationProp<ParamList>>();

    function connexion(){
        if(username == "admin" && password == "admin"){
            nav.navigate('(home)');
        }else{
            alert("Wrong credentials")
        }
    }
    
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
            <SafeAreaView style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#888"
                    onChangeText={setUsername}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
            </SafeAreaView>
            <Button
                onPress={() => connexion()}
                title="Login"
                color="#007BFF"
            />
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#e6f7ff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  },
  title: {
      fontSize: 32,
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: 20,
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
      marginBottom: 15,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
  }
});