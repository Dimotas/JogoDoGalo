import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ResultsX = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>X - Venceu</Text>
      </View>
    </View>
  )
}

export default ResultsX

const styles = StyleSheet.create({

    container:{
        height:130,
        width:330,
        borderColor:'#9dbd11',
        borderWidth:6,
        borderRadius:50,
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'center',
    },
    
    texto:{

        fontSize:50,
        fontWeight:'bold',
        color:'#9dbd11',
        alignSelf: 'center'


    }
})