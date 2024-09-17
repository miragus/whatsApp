import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from './components/user';
import { Features } from './components/features';
import { Managements } from './components/management';
import { DeviceCare } from './components/deviceCare';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <User />

      <Features/>

      <Managements/>

      <DeviceCare/>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E2E7',
    alignItems: 'center'
  },

});