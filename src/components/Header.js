import React, {Component} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

export default class Header extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.containerConnect}>
        <Text style={styles.croix}>&#xD7;</Text>
        <Text style={styles.connect}>{navigation}</Text>
      </View>
    );
  }
}
