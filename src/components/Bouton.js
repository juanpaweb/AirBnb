import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../components/styles.js';

export default class Bouton extends Component {
  render() {
    const {backgroundColor, textColor, icone} = this.props;
    return (
      <TouchableOpacity
        style={[styles.decoBouton, {backgroundColor: backgroundColor}]}>
        {icone}
        <Text style={[styles.textBouton, {color: textColor}]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
