import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import styles from '../components/styles.js';

export default class Champ extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     myText: 'Afficher',
  //   };
  // }
  // updateText = () => {
  //   this.setState({myText: 'Masquer'});
  // };
  render() {
    const {showPassword, textInputType} = this.props;

    return (
      <View style={[styles.champ]}>
        <View style={[styles.flex]}>
          <Text style={[styles.textLabel]}>{this.props.title}</Text>
          {showPassword && (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  displayPassword: true,
                });
              }}>
              <Text
                /*onPress={this.updateText}*/ style={styles.textShowPassword}>
                Afficher {/*{this.state.myText} */}
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {textInputType === 'email' && (
          <TextInput
            style={[styles.textInput]}
            //textContentType={'email'}
            onChangeText={text => console.log(text)}></TextInput>
        )}
        {textInputType === 'password' && (
          <TextInput
            style={[styles.textInput]}
            textContentType={'password'}
            secureTextEntry={true}
            onChangeText={text => console.log(text)}></TextInput>
        )}
      </View>
    );
  }
}
