import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

            //Recebe por meios das props o resultado e imprime na tela

export default function Result(props) {
 return (
   <View style={styles.container}>
        <Text style={styles.itemText}>CEP: {props.cepUser.cep}</Text>
        <Text style={styles.itemText}>Logradouro: {props.cepUser.logradouro}</Text>
        <Text style={styles.itemText}>Bairro: {props.cepUser.bairro}</Text>
        <Text style={styles.itemText}>Cidade: {props.cepUser.localidade}</Text>
        <Text style={styles.itemText}>Estado: {props.cepUser.uf}</Text>
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