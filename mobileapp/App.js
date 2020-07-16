import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default () => {
  // StyleSheet
  const estilo = StyleSheet.create({
    areaExibicao:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    titulo:{
      color:'#FF0000',
      fontSize:25
    }
  });
  // Constante
  const [ nomeUsuario, setNomeUsuario ] = useState('');
  const [ mostrarNome, setMostrarNome ] = useState(false);
  // Funcoes
  function getNomeUsuario(token) {
    fetch('https://graph.facebook.com/me?fields=id,name&access_token=' + token)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNomeUsuario(json.name);
        setMostrarNome(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // Retorno
  return (
    <SafeAreaView style={estilo.areaExibicao}>

      {mostrarNome &&
        <Text style={estilo.titulo}>Bem vindo {nomeUsuario}!</Text>
      }

      <LoginButton
          onLoginFinished={
            (error, result) => {
              setMostrarNome(false);
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    getNomeUsuario(data.accessToken.toString());
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {
            console.log("logout.");
            setMostrarNome(false);
          }}/>
          
    </SafeAreaView>
  );
};