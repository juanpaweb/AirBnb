import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from '../components/styles.js';

export default class Champ extends Component {
  render() {
    const {showPassword} = this.props;
    return (
      <View style={[styles.champ]}>
        <View style={[styles.flex]}>
          <Text style={[styles.textLabel]}>{this.props.title}</Text>
          {showPassword}
        </View>
        <TextInput style={[styles.textInput]}></TextInput>
      </View>
    );
  }
}
