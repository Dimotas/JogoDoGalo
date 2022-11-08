import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ResultsO = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>O - Venceu </Text>
      </View>
    </View>
  )
}

export default ResultsO

const styles = StyleSheet.create({

    container:{
        height:130,
        width:330,
        borderColor:'#488b39',
        borderWidth:6,
        borderRadius:50,
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'center',
    },
    
    texto:{

        fontSize:50,
        fontWeight:'bold',
        color:'#488b39',
        alignSelf: 'center'


    }
})