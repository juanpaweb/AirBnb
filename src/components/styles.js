import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  //CSS des Boutons
  decoBouton: {
    borderRadius: 50,
    padding: 12,
    backgroundColor: Colors.white,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textBouton: {
    color: '#008388',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:
      'Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
  },
  facebookButtonIcon: {
    color: '#008388',
  },
  iconeFb: {
    position: 'absolute',
    left: 20,
    top: 15,
    paddingVertical: 0,
  },
  //CSS de Fenêtre Modal
  plusOptionsBtn: {flex: 1, justifyContent: 'center'},
});
export default styles;
