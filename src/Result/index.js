import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Result() {
 return (
   <View style={styles.container}>
        <Text style={styles.itemText}>CEP: 08696282</Text>
        <Text style={styles.itemText}>Logradouro: rua sua mae</Text>
        <Text style={styles.itemText}>Bairro: Jardim Varan</Text>
        <Text style={styles.itemText}>Cidade: Suzano</Text>
        <Text style={styles.itemText}>Estado: SM</Text>
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 85,
      alignItems: 'center'
    },
    itemText:{
        color: '#000',
        fontSize: 20
    }
  })