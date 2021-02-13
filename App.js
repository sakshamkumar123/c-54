import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class CustomButton extends Component {
  displayAlert() {
    alert('this is an alert for the button');
  }
  render() {
    return (
      <Button
        color={this.props.myColor}
        title="Click Me"
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ backgroundColor: 'black', height: '100%' }}>
        <CustomButton myColor="green" />
        <View style={{ marginTop: 50 }}>
          <CustomButton myColor="blue" />
        </View>

        <Text
          style={{ color: 'white', fontWeight: 'bold', textAlign: 'CENTER'}}>
          My First React Component
        </Text>
      </View>
    );
  }
}
