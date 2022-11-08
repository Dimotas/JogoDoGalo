import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ResultsEmpate = () => {
  return (
    <View style={styles.container}>
      
      <View style = {styles.quadrado}>
        <Text style = {styles.texto}>Empataram</Text>
      </View>
    </View>
  )
}

export default ResultsEmpate

const styles = StyleSheet.create({

    container:{
        height:130,
        width:330,
        borderColor:'#c8682d',
        borderWidth:6,
        borderRadius:50,
        alignSelf:'center',
        marginVertical:20,
        justifyContent:'center',
    },
    
    texto:{

        fontSize:50,
        fontWeight:'bold',
        color:'#c8682d',
        alignSelf: 'center'


    }
})