import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function App() {

  const fadeAnim = React.useRef( new Animated.Value(0) ).current;

  const posY = new Animated.Value(-200);
  const posYAnim = React.useRef( posY ).current;

  const fadeIn = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        // useNativeDriver:false
      }
    ).start();

    Animated.timing(
      posYAnim,
      {
        toValue: 0,
        duration: 1000,
        // useNativeDriver:false
      }
    ).start();
  }
  const fadeOut = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 1000,
        useNativeDriver:true
      }
    ).start();

    Animated.timing(
      posYAnim,
      {
        toValue: -200,
        duration: 1000,
        useNativeDriver:true
      }
    ).start();
  }

  const stopAnimY = () => {
    posY.stopAnimation((value) => {
      console.log( value );
    });
  }

  return (
    <View style={styles.container}>

<Animated.View style={[styles.block,{
  opacity: fadeAnim,
  transform: [
    { translateY: posYAnim }
  ]
  }]}>
        <Text style={{color: 'white', fontWeight:'bold'}}>FADE ANIMATION</Text>
      </Animated.View>

      <Button title="Fade In" onPress={ fadeIn } />
      <Button title="Fade Out" onPress={ fadeOut } />
      <Button title="STOP !!!" onPress={ stopAnimY } />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block:{
    padding: 30,
    backgroundColor: 'red',
    
  }
});
