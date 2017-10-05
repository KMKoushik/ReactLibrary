
import { Platform,AppRegistry, StyleSheet} from 'react-native';

var riactClr = '#60b4f3';
var backgroundColor = '#d4e8f7';
var riactBtnClr = '#1485d8';
var minWidth = 300;
var minHeight =50;

module.exports= {

  splashScreen :{
    justifyContent:  'center' ,
    alignItems: 'center',
    flex:1,
    backgroundColor:backgroundColor,
  },

  scrollsplashScreen :{
    justifyContent: (Platform.OS === 'ios') ? 'center' : 'flex-start',
    alignItems: 'center',
    flex:1,
    backgroundColor:backgroundColor,
  },

  scrollViewContainer :{
  flex: 1,
  },

  centerAlignText :{
       textAlign: 'center',
    justifyContent: 'center',

  },

  appHeader :
  {
    backgroundColor: (Platform.OS === 'ios') ? '#F3B059':'#F3B059',
    flexDirection: 'column',
    justifyContent: 'space-between'

  },


  //Nav Bar Style starts Here 
  statusBar: {
    backgroundColor: riactBtnClr, 
  },
  navBar: {
    backgroundColor: riactBtnClr,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  
 title: {
    // NavButtonText styles here (all text styles are valid) 
 
    // default styles: 
    justifyContent:'center',
    alignItems : 'center',
    color: '#ffffff',
  },


  //Nav Bar ends here


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
    marginBottom : (Platform.OS === 'ios')?12:6,
    marginTop:(Platform.OS === 'ios') ?12:6,
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
    marginBottom:(Platform.OS === 'ios') ?30:15,
  },

  riactButton:{
    minWidth : minWidth,
    minHeight :minHeight,
    borderRadius: 7,
    marginTop:12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: riactBtnClr,

  },



  listViewContainer: {
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',


    },
    listitem: {
        backgroundColor: '#ffffff',
        margin: 6,
        width: 150,
        height:60,
        justifyContent:'center',
        alignItems:'center'

    }



}