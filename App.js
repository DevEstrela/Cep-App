import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';
import Result from './src/Result';

export default function App() {
  const [cep, setCep ] = useState(null)
 return (
   <SafeAreaView style={styles.container}>

      <View style={{alignItems: 'center', marginTop: 25}}>

          <Text style={styles.title}> Digite o cep desejado</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: 08696282"
            value={cep}
            onChanceText={(text) => setCep(text)}
            keyboardType='numeric'
          />

      <View style={styles.areaBtn}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#1c75cd'}]}>
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: '#cd3e1c'}]}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
      </View>
          
        

      </View>

        <Result/>
        
   </SafeAreaView>
  );
}  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  title:{
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    height: 35,
    width: '90%',
    marginTop: 30,
    padding: 10
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    width: '100%',
      
  },
  button:{
    borderRadius: 5,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textButton:{
    color: '#FFF'
  }
})