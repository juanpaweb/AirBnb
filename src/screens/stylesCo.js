import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const stylesCo = StyleSheet.create({
  structGlobal: {
    flex: 1,
    backgroundColor: '#008388',
    flexDirection: 'column',
    padding: 20,
  },
  containerConnect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  connect: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 'auto',
    textAlignVertical: 'center',
  },
  titre: {
    fontSize: 30,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 40,
    color: 'white',
    fontWeight: '700',
  },
  fleche: {
    color: Colors.white,
    fontSize: 30,
    margin: 'auto',
    transform: [{rotate: '180deg'}],
  },
  textSavoirPlus: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  txtContentType: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  //CSS de Fenêtre Modal
  plusOptionsBtn: {flex: 1, justifyContent: 'center'},
});
export default stylesCo;
