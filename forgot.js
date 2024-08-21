import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import tandaPanah from './assets/Vector.png';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <View>
        <Text style = {{
        fontSize :34,
        fontWeight : 'bold'
        }}>Forgot password </Text>

        <Text style = {{
          fontSize: 15,
          marginTop: 100,
          alignItems: 'center',
          height: 64,
          width: 343
        }}>Please, enter your email address, You will receive a link to create a new password via email.</Text>

        <TextInput 
        placeholder = 'Email'
        style={{
          height: 64,
          width: 343,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          paddingLeft: 10
        }}/>
        
        <Text style = {{
          alignItems: 'center',
        }}>Not a valid email address. Should be your@email.com</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 20
        }}>
        </View>
        <Button title='Send'/>
        <View style={{marginTop: 250, }}>
        
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>

        </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingTop: 70
  },
});



