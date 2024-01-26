import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Pressable, TouchableHighlight, Dimensions } from 'react-native';
import { Quicksand_300Light } from "@expo-google-fonts/quicksand";
import { useFonts } from "expo-font";

export default function App() {
  //npx expo start --tunnel
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_300Light,
    'single-day': require('./assets/fonts/SingleDay-Regular.ttf'),
    'rubik-glitch-pop': require('./assets/fonts/RubikGlitchPop-Regular.ttf')
  });

  if (!fontsLoaded && !fontError) {
    return <Text>Loading...</Text>;
  }

  alertMessage = ()=>{Alert.alert('I Love You Pooja!')}

  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.headerText}>meetup</Text>
        <Text style={styles.versionText}>v1.0.0</Text>
      </View>
      <View style={styles.container2}>
          <TouchableHighlight
              style = {{
                borderRadius: 25,
                width: 50,
                height: 50,
                backgroundColor:'#f5f5f5',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              underlayColor = '#ccc'
              onPress = { alertMessage }
            >
            <Text>Start</Text>
        </TouchableHighlight>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
    height: 70,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c1c0',
    borderRadius: 10
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    top: 25,
    fontFamily: 'rubik-glitch-pop',
    fontSize: 35,
  },
  versionText: { 
    textAlign:'right',
    right: 10,
    fontFamily: 'Quicksand_300Light'
  },
  container2:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    borderCurve:10
  }
});
