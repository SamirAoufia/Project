import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{ 
       headerShown: false,
        
      }}>
      <Tabs.Screen name="index"  options={{
          title: 'Project',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="short-text" size={size} color={color} />
          ),
         }} />
      <Tabs.Screen name="value" options={{
          title: 'IoT',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="device-hub" size={size} color={color} />
          ),
         }} />
      <Tabs.Screen name="history"options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
         }} />
    </Tabs>
  );
}
