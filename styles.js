
import { Platform,AppRegistry, StyleSheet} from 'react-native';

var riactClr = '#60b4f3';
var riactBtnClr = '#1485d8';
var minWidth = 300;
var minHeight =50;

module.exports= {

  splashScreen :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },

  scrollViewContainer :{
  flexGrow: 1,
  },

  appHeader :
  {
    backgroundColor: (Platform.OS === 'ios') ? '#F3B059':'#F3B059',
    flexDirection: 'column',
    justifyContent: 'space-between'

  },
  headerText :
  {
   textAlign: 'center',
   marginTop:10,
    fontSize : (Platform.OS === 'ios') ? 20 : 16,
    color: 'black',
  },
  appBody :{
    
    alignItems: 'center',

  },
   primaryButton: {
    minWidth : minWidth,
    minHeight :minHeight,
    borderRadius: 7,
    marginTop:12,
    marginBottom:12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F79F1A',
    
  },
  roundButton : {
     minWidth : minWidth,
    minHeight :minHeight,
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
    minWidth : minWidth,
    marginBottom : 12,
    marginTop:12,
    minHeight :50,
    borderRadius: 7,
    padding : 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: (Platform.OS === 'ios') ? 'gray':'#fff',
    borderWidth: 1
  },

  welcomeText:{
    fontSize : 20,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom:30,
  },

  riactButton:{
    minWidth : minWidth,
    minHeight :minHeight,
    borderRadius: 7,
    marginTop:12,
    marginBottom:12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: riactBtnClr,

  }

}