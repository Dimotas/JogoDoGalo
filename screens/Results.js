import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, Button, ScrollView, View, ImageBackground} from 'react-native';
import historico from '../components/historico';

function Results() {

    return(
        <ScrollView>
            {historico.historico}
        </ScrollView>
    )
}




  export default Results;