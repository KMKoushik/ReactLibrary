import React from 'react';
import {Text, View,Image,TouchableOpacity,StatusBar,Dimensions,Platform,WebView} from 'react-native';
import styles from './styles';
import NavBar, { NavGroup, NavButton, NavButtonText, NavTitle } from 'react-native-nav'


class CardView extends React.Component {

	/*static propTypes = {
    content: React.PropTypes.string.isRequired,
    textStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
  }*/
  render() {
  	var { children,title,height,footer,titleColor,titleBackground} = this.props;

  	titleTag=<View></View>

  	if(title!="")
  	{
  		titleTag=
	  		<View style={[styles.cardViewTitle,{backgroundColor:titleBackground}]}>
	      		<Text style={[styles.cardViewText,{color:titleColor}]}>
	      			{title}
	      		</Text>
	     	 </View>
  	}


    return (
      <View style={[styles.cardView,{height:height}]}>
      {titleTag}
      <View style={{flex:3,padding:5,}}>
        {children}
       </View>
       <View style={styles.cardViewFooter}>
       {footer}
       </View>
      </View>
    )
  }
}

class NewsCardView extends React.Component {

	/*static propTypes = {
    content: React.PropTypes.string.isRequired,
    textStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
  }*/
  render() {
  	var { children,title,height,footer,titleColor,titleBackground,imgUri} = this.props;

    return (
      <View style={[styles.cardView,{height:height}]}>
      <Image style={styles.bgContainer} resizeMode='cover' source={{uri:imgUri}} />

      <View style={{flex:3,padding:5,}}>
        {children}
       </View>
       <View style={styles.cardViewFooter}>
       {footer}
       </View>
      </View>
    )
  }
}


class HytteWebView extends React.Component {
  render() {
  	const { children,uri,reactComponent } = this.props;
    return (
      <View style={{flex:1}}>
      <NavBar style={styles}>
      <NavButton  style={{marginLeft:0}} onPress={() => reactComponent.setState({openNews:false,uri:''})}>
	      <NavButtonText style={styles.title}>
	        {"close"}
	      </NavButtonText>
      </NavButton>
      <NavTitle style={styles.title}>
        {'WebView'}
      </NavTitle>
      <NavButtonText>
      </NavButtonText>
      </NavBar>
      <WebView source={{uri: uri}}/>
      </View>

    )
  }
}

module.exports={CardView,HytteWebView,NewsCardView}