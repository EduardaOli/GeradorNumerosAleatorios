import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [Min, setValorMin] = useState('1');
  const [Max, setValorMax] = useState('10');
  const [valorAleatorio, setValorAleatorio] = useState('Nenhum');

  function gerarNumero() {
    let min = parseInt(Min);
    let max = parseInt(Max);
    let random = randomInteger(min, max);

    setValorAleatorio(random);
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Gerador de Números Aleratórios</Text>

      <View style={styles.campos}>
        <View style={styles.Min}>
          <Text style={{ fontSize: 18 }}> Min </Text>
          <TextInput
            style={{ height: 40, borderColor: 'green', borderWidth: 1, padding: 5 }}
            onChangeText={numero => setValorMin(numero)}
            value={Min}
            keyboardType='number-pad'
          />
        </View>

        <View style={styles.Max}>
          <Text style={{ fontSize: 18 }}> Max </Text>
          <TextInput
            style={{ height: 40, borderColor: 'red', borderWidth: 1, padding: 5 }}
            onChangeText={numero => setValorMax(numero)}
            value={Max}
            keyboardType='number-pad'
          />
        </View>

      </View>

      <Button
        title='Gerar Número'
        onPress={() => gerarNumero()}
      />
      
      <Text style={styles.resultados}>{valorAleatorio}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campos: {
    flexDirection: 'row',
    margin: 10,
  },
  Min: {
    margin: 10,
    width: 40,
  },
  Max: {
    margin: 10,
    width: 40,
  },
  resultados: {
    margin: 10,
    height: 45,
    borderColor: '#0c0c0c',
    width: 50,
    borderWidth: 1,
    padding: 12,
    fontSize: 20,
  },

});
