import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import styles from './styles';
import stylesCo from './stylesCo';
import componentsStyles from '../components/styles'; //Intégration du CSS du Bouton, Champ, Header, Fenêtre Modal
//import Bouton from '../components/Bouton'; //Intégration du composants Bouton
import Champ from '../components/Champ'; //Intégration du composants Champ
import FenetreModal from '../components/FenetreModal'; //Intégration du composants Fenêtre Modal
import Header from '../components/Header';

export default class LoginCo extends Component {
  state = {
    displayPassword: false,
  };
  static navigationOptions = ({navigation}) => ({
    header: Header,
  });
  render() {
    return (
      <View style={stylesCo.structGlobal}>
        <View style={stylesCo.containerConnect}>
          <Text style={stylesCo.fleche}> &#x2794;</Text>
          <Text style={stylesCo.connect}>Mot de passe oublié ?</Text>
        </View>
        <Text style={stylesCo.titre}>Connexion</Text>
        <Champ title={'Adresse e-mail'} textInputType={textContentType={'email'}} />
        <Champ
          title={'Mot de passe'}
          showPassword={true}
          textInputType={
            textContentType={'password'},
          secureTextEntry={true}}
          //   textContentType={'password'},
          //   secureTextEntry={true}}
          display={this.state.displayPassword}
          close={() => this.setState({displayPassword: false})}
        />
        {/* 
        <FenetreModal
          display={this.state.displayModale}
          close={() => this.setState({displayModale: false})}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                displayModale: true,
              });
            }}>
            <Text style={stylesCo.textSavoirPlus}>Plus d'options</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}
