import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../components/styles.js';
import stylesCo from '../screens/stylesCo';

export default class Bouton extends Component {
  render() {
    const {backgroundColor, textColor, icone, opacity, textAlign} = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.decoBouton,
          {backgroundColor: backgroundColor},
          stylesCo.scrollArrow,
          {opacity: opacity},
        ]}>
        {icone}
        <Text
          style={[
            styles.textBouton,
            {color: textColor},
            stylesCo.textScrollArrow,
          ]}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
