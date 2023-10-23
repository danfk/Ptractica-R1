import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      switchValue: false,
      texto: "",
    }
  }

  textAlert = () =>
    Alert.alert('Hola', `Escribiste: ${this.state.texto}`, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  
  onChange = (value) =>{
    console.warn(`El switch cambiara a ${value}`)
    this.setState({switchValue: value})
  }

  onChangeName = (texto) =>{
    this.setState({ texto })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={this.onChangeName}
          value={this.state.texto}
          placeholder="escribe algo"
          keyboardType="default"
        />
        <Button
          onPress={(this.textAlert)}
          title="Mensaje"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        {/*<Switch
          onValueChange={() => this.onChange(!this.state.switchValue)}
          value={this.state.switchValue}
        />
        <Text>Clase</Text>*/}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});