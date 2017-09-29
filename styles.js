
import { Platform,AppRegistry, StyleSheet} from 'react-native';

module.exports= {

 
  appHeader :
  {
    backgroundColor: (Platform.OS === 'ios') ? '#F3B059':'#F3B059',
    flexDirection: 'column',
    justifyContent: 'space-between'

  },
  headerText :
  {
   textAlign: 'center',

    fontSize : (Platform.OS === 'ios') ? 20 : 13,
    color: 'white',
  },
  appBody :{
    
    alignItems: 'center',

  },
   primaryButton: {
    minWidth : 270,
    minHeight :50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79F1A',
    
  },
  roundButton : {
     minWidth : 270,
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
  primaryTextInput : {
    minWidth : 270,
    marginBottom : 30,
    minHeight :50,
    borderRadius: 7,
    padding : 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1
  },

  welcomeText:{
    fontSize : 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom:30,
  }

}