import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, Button, ScrollView, View, ImageBackground} from 'react-native';
import Botao from './components/Botao';
import Galo from './img/Galo.png';


const Home = () => {
    const nav = useNavigation();

  
  return ( 

      <View style={styles.container}>
        <ImageBackground source={Galo} resizeMode="stretch" style ={styles.imagem}>

        

         <Botao texto='Play' onpress={() => {
           nav.navigate("Play");
        }}></Botao>

          <Botao texto='About' onpress={() => {
           nav.navigate("About");
        }}></Botao>

          <Botao texto='Results' onpress={() => {
           nav.navigate("Results");
        }}></Botao>
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
  texto:{
    fontSize:100,
    color:'black',
    position:'absolute',
    top:100,
    fontWeight:'bold',
  },

  imagem:{
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  }




})



  export default Home;