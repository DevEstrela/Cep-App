import React, {useState, useRef, useReducer} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Keyboard } from 'react-native'; 
import Result from './src/Result';
import api from './src/services/api';

export default function App() {
const [cep, setCep ] = useState('');  //Const que é atribuido o campo de cep
const inputRef = useRef(null);   //Vai referenciar o focus no input

const [cepUser, setCepUser] = useState(null);  //Armazenado os dados da requisição da API

  function limpar(){
    setCep('');                       //Limpa o campo
    inputRef.current.focus();         //Da o focus no campo 
    setCepUser(null)                  //Retorna a requisição nulla para limpar a pesquisa
  }

  async function buscar(){
    if(cep === ''){       //Verificação de campo digitado
      alert('Digite um numero de cep')
      setCep('')
      return;
    }

            //Caso de sucesso e erro try e catch
    try { 
      const response = await api.get(`/${cep}/json`)        //Requisição http atribuindo o cep digitado

      setCepUser(response.data)     //Atribui o resultado da requisição ne variavel

      Keyboard.dismiss();     //Garante que o teclado será fechado

    } catch (error) {
      alert('ERRO: ' + error)
    }




  }

 return (
   <View style={styles.container}>

      <View style={{alignItems: 'center', marginTop: 25}}>

          <Text style={styles.title}> Digite o cep desejado</Text>

          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={ (text) => setCep(text)}
            keyboardType="numeric"
            ref={inputRef}
          />

      <View style={styles.areaBtn}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#1c75cd'}]} onPress={buscar}>
            <Text style={styles.textButton}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: '#cd3e1c'}]}  onPress={limpar}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
      </View>
          
        

      </View> 

        {cepUser &&     //abre apenas quando tiver valor da requisição

          <Result cepUser={cepUser}/>  //componente externo do resultado, levando como props o resultado

        }

   </View>
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