import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, Image, View, WebView, KeyboardAvoidingView, Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//AiChat Screen
class AiChatScreen extends Component {

  render() {

    const uri = 'http://demo.iptribe-bot.live/shared/icybuddy-bot-mobile/index.html';

    return(
      
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri }}
          onNavigationStateChange={(event) => {
            if (event.url !== uri && event.url != "http://demo.iptribe-bot.live/shared/icybuddy-bot-mobile/login.html") {
              this.webview.stopLoading();
              Linking.openURL(event.url);
            }
          }}
        />     
    );
  }
}

//Home Screen
class HomeScreen extends Component {

  constructor(props) {
    super(props)  
  }

  render() {
    let chatIcon = {
      uri: 'https://demo.aichat.site/iptribe/widget_web_chat/aichat_logo.png'
    }

    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
        <Text>Home Screen</Text>          

        <TouchableHighlight onPress={() => this.props.navigation.navigate('AiChat')} underlayColor="white" style={{ width: 100, height: 100, position: "absolute", bottom: 0, right: 0 }} >
        <Image source = {chatIcon} style={{ width: 100, height: 100, position: "absolute", bottom: 0, right: 0 }} />
        </TouchableHighlight>
      </View>
    );
  }
}

//Stylesheet for the Views
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  WebViewStyle:
  {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      //marginTop: 20
  }
});

//Routes
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    AiChat: AiChatScreen
  },
  {
    initialRouteName: 'Home'
  }
);

//
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
} 