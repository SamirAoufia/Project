import { Text, View,Button, TextInput, Switch,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Paho from 'paho-mqtt';
import { useState, useEffect } from "react";

const optionMQTT= {
    host : 'gx-cloud49.segi.ulg.ac.be',
    port : 8080,
    clientId : 'Application Mobile', 
    user: 'lsg',
    password : 'main01',
}

const client = new Paho.Client(optionMQTT.host, optionMQTT.port, optionMQTT.clientId);

export default function Value() {
    const [connexion, setConnexion] = useState(false)
    const [value, setValue] = useState<string>('')
    const [p, setP] = useState<string>('')

    const [isFanEnabled, setIsFanEnabled] = useState(false);
    const [isLampEnabled, setIsLampEnabled] = useState(false);
    const [isAutomaticEnabled, setIsAutomaticEnabled] = useState(false);

const toggleFanSwitch = (value: boolean) => {
    setIsFanEnabled(value);
    if (value) {
        setIsLampEnabled(false);
        setIsAutomaticEnabled(false);
        PublishToMQTT(1);
    } else {
        PublishToMQTT(0);
    }
};

const toggleLampSwitch = (value: boolean) => {
    setIsLampEnabled(value);
    if (value) {
        setIsFanEnabled(false);
        setIsAutomaticEnabled(false);
        PublishToMQTT(2);
    } else {
        PublishToMQTT(0);
    }
};

const toggleAutomaticSwitch = (value: boolean) => {
    setIsAutomaticEnabled(value);
    if (value) {
        setIsLampEnabled(false);
        setIsFanEnabled(false);
        PublishToMQTT(4);
    } else {
        PublishToMQTT(0);
    }
};




    function Subscribetovalue(){
        client.subscribe('value');
        client.onMessageArrived = (message) => {
              setValue(message.payloadString)
          }
      }
  
      function PublishToSetPoint(){
          if(client.isConnected()){
              const message = new Paho.Message(p);
              message.destinationName = 'setpoint';
              client.send(message);
              console.log('Message sent to MQTT broker');
          }else{
              console.error('Failed to send message to MQTT broker');
          }
      }

      function PublishToMQTT(value: any){
        if(client.isConnected()){
            const message = new Paho.Message(value.toString());
            message.destinationName = 'mode';
            client.send(message);
            console.log('Message sent to MQTT broker');
        }else{
            console.error('Failed to send message to MQTT broker');
        }
      }

  
    useEffect(() => {
        if(!connexion){
          client.connect({
              userName: optionMQTT.user,
              password: optionMQTT.password,
              onSuccess: () => {
                  setConnexion(true);
                  Subscribetovalue();
                  console.log('Connected to MQTT broker');
              },
              onFailure: (err) => {
                  console.error('Failed to connect to MQTT broker', err);
              }
          })
        }
    }, [connexion]);

        
    




  return (
    <View style={styles.container}>
            <Text style={styles.title}>Value Page</Text>
           

            {
                connexion ? (
                    <><Text style={styles.labelgreen}>Connect</Text></>
                ) : (
                    <>
                      <Text style={styles.labelred}> disconnect </Text> 
                    </>
                )
            }

            <View style={styles.switchContainerCentered}>
                <Text style={styles.label}>Temperature : {value}°C</Text>
            </View>
            
            <SafeAreaView style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="20°C"
                    onChangeText={setP}
                    value={p}
                />
                <Button title="Send"  onPress={() => PublishToSetPoint()} />
            </SafeAreaView>

            <View style={styles.switchContainer}>
        <View style={styles.switchItem}>
            <Text style={styles.label}>Fan On</Text>
            <Switch
                style={styles.switch}
                onValueChange={toggleFanSwitch}
                value={isFanEnabled}
            />
        </View>
        <View style={styles.switchItem}>
            <Text style={styles.label}>Lamp On</Text>
            <Switch
                style={styles.switch}
                onValueChange={toggleLampSwitch}
                value={isLampEnabled}
            />
        </View>
    </View>

      <View style={styles.section}>
    <Text style={styles.label}>Automatic Mode</Text>
    <View style={styles.switchContainerCentered}>
        <Switch style={styles.switch} onValueChange={toggleAutomaticSwitch} value={isAutomaticEnabled}/>
    </View>
</View>



            <View style={styles.section}>
                <Button title="ALL OFF" color="#FF4D4D" onPress={() => PublishToMQTT(3)} />
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
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
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
  labelgreen: {
    fontSize: 16,
    color: '#78ff00',
    marginBottom: 10,
    },
    labelred: {
        fontSize: 16,
        color: '#ff0000',
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
