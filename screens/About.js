import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, Button, ScrollView, View, ImageBackground} from 'react-native';
import Galo from '../img/Galo.png';

const About = () => {
    const nav = useNavigation();

  
  return ( 

      <View style={styles.container}>
        <ImageBackground source={Galo} resizeMode="stretch" style ={styles.imagem}>
        
        <View style={styles.text_container}>
            <Text style={styles.texto}> Algumas lendas urbanas </Text>
            <Text style={styles.texto}>contam que o jogo terá nascido em Portugal,</Text>
            <Text style={styles.texto}>na cidade de Almada no ano 545.</Text> 
            <Text style={styles.texto}>No entanto, só foi popularizado no ano 1500,</Text>
            <Text style={styles.texto}>pelo descobridor Pedro Álvares Cabral,</Text> 
            <Text style={styles.texto}>que adorava jogar este jogo</Text> 
            <Text style={styles.texto}>durante as suas viagens.</Text>
        </View>
        
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({

  container:{
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'

  },

  info:{

    fontSize:100,
    color:'black',
    position:'absolute',
    right:20,
    bottom:20,
  },
  text_container:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    fontSize:15,
    color:'black',
    fontWeight:'bold',
  },

  imagem:{
    flex: 1,
    justifyContent: 'center',

    alignContent: 'center',
    alignItems: 'center',
  }




})



  export default About;