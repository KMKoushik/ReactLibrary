
import { Platform,AppRegistry, StyleSheet} from 'react-native';

module.exports= {
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  appHeader :
  {
    flex:1,
    backgroundColor: (Platform.OS === 'ios') ? '#DC66FF':'#DA87F3',
     justifyContent: 'center',
    alignItems: 'center',
  },
  headerText :
  {
   textAlign: 'center',
    marginTop: 16,
    fontSize : (Platform.OS === 'ios') ? 20 : 13,
    color:(Platform.OS === 'ios') ? 'white' : 'black',
  },
  body :{
    flex: .87,
    justifyContent: 'center',
    alignItems: 'center',

  },
   primaryButton: {
    minWidth : 200,
    minHeight :50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79F1A',
    
  },
  roundButton : {
     minWidth : 200,
    minHeight :50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79F1A',
  },
  buttonText: {
    fontSize : (Platform.OS === 'ios') ? 20 : 13,
    color: 'white'
  },
  primarText : {
    minWidth : 200,
    marginBottom : 30,
    minHeight :50,
    borderRadius: 7,
    padding : 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1
  }
}