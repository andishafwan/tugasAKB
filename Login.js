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
        }}>Login</Text>
        <TextInput 
        placeholder = 'Email'
        style={{
          height: 64,
          width: 343,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          paddingLeft: 10
        }}/>
        <TextInput 
        placeholder = 'Password'
        style={{
          height: 64,
          width: 343,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          paddingLeft: 10
        }}/>
        
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 20,
          marginBottom: 20
        }}>
        <Text style = {{
        }}>Forgot your password? </Text>
        <Image source ={tandaPanah} style ={{width:25, height:10}}/>
        </View>

        <Button title='Log In'/>
        <View style={{marginTop: 250, }}>
        <Text style={{marginTop: 20,
        textAlign:'center'}}>Or Sign up with account social media</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Image source={facebook} style={{width: 35, height: 35}}/>
        <Image source={google} style={{width: 35, height: 35}}/>
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
    paddingTop: 100
  },
});



