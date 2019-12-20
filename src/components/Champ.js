import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../components/styles.js';

export default class Champ extends Component {
  render() {
    const {showPassword} = this.props;
    return (
      <View style={[styles.champ]}>
        <View style={[styles.flex]}>
          <Text style={[styles.textLabel]}>{this.props.title}</Text>
          {showPassword && (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  displayModale: true,
                });
              }}>
              {showPassword && (
                <Text onPress={this.updateText} style={styles.textShowPassword}>
                  Afficher {/*{this.state.myText} */}
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              displayPassword: true,
            });
          }}>
          <TextInput
            style={[styles.textInput]}
            textContentType={'password'}
            secureTextEntry={true}
            onChangeText={text => console.log(text)}></TextInput>
        </TouchableOpacity>
      </View>
    );
  }
}
