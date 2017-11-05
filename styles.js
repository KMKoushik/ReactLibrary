
import { Platform,AppRegistry, StyleSheet} from 'react-native';

var riactClr = '#60b4f3';
var backgroundColor = '#fff';
var riactBtnClr = '#1485d8';
var minWidth = 250;
var minHeight =50;
var mlivClr = '#F79F1A';
var creamClr = '#f6f5ed';

module.exports= {

  splashScreen :{
    justifyContent:  'center' ,
    alignItems: 'center',
    flex:1,
    backgroundColor:backgroundColor,
  },

  cardView:{
    height:150,
    margin:5,
    backgroundColor:backgroundColor,
    borderWidth: .5,
  borderRadius: 3,
  borderColor: '#ddd',
  shadowColor: '#000',
  shadowOffset: {width: 0, height: .3},
  shadowOpacity: 0.5,
  shadowRadius: 1,
  },

  cardViewTitle:{
  borderColor: '#ddd',
      borderBottomWidth: 1,
    backgroundColor:'#1c58d8',

  },

  cardViewText:{
    fontSize: 20,
    fontWeight: 'bold',
    padding:6,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    color:'#fff'
  },

  cardViewFooter:{
    padding:6,
  },

  creamBackGround:{
    flex:1,
    backgroundColor:creamClr

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

  centerAlignView:{
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: (Platform.OS === 'ios') ?mlivClr: '#d88b15', 
  },
  navBar: {
    backgroundColor: mlivClr,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
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
    color:'#ffffff',
        backgroundColor: mlivClr,

  },


  navTitle:{
    justifyContent:'center',
    alignItems : 'center',
    backgroundColor: mlivClr,
  },


  //Nav Bar ends here

  tableHeader:{
    color: '#24bc09',//#1c58d8'#24bc09'
    fontSize:18,
    fontWeight: 'bold',
    marginTop:10,

  },


  headerText :
  {
   textAlign: 'center',
   marginTop:10,
    fontSize : 20,
    color: 'black',
  },

mlivWelcomeText :
  {
   textAlign: 'center',
   marginTop:15,
    fontSize : 30,
    color: '#F79F1A',
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

  headLineText:{
    fontWeight: 'bold',
    fontSize : 15,

  },

  newsContent:{
    fontSize : 15,
    marginTop:4,

  },

  imageTitleText:{

    fontSize : 11,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop:5,
    color:mlivClr,
        fontWeight: 'bold',

  },
  welcomeTextWhite:{
    padding:10,
    fontSize : 20,
    color : '#fff',
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
        backgroundColor: '#C2DFFF',
        margin: 12,
        width: 150,
        height:60,
        justifyContent:'center',
        alignItems:'center'

  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2632b',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a22af1',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d13030',
  },

  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c357a',
  },
bgContainer: { flex:1, width: 300, height: 400 } ,


}