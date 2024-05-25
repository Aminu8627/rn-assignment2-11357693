import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={styles.mytext}>My name is <Text style={styles.myname}>Muhammed Aminu Umar</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mytext:{
    fontSize:24,
  },
  myname:{
    fontWeight:'bold'
  },

});
