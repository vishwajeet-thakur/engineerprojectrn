/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

var api_key = "qDhff0APLvzJ0edwNVwqxNB5rvdKkXAOeJ5xCpeT";
class DetailScreen extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      asteroid_data:this.props.route.params.api_data
    }
  }
  
  componentDidMount(){
      console.log(this.props.route.params)
  }

  render(){
    return(
      <View>
          <Text style={styles.text_style}>name : {this.state.asteroid_data.name}</Text>
          <Text style={styles.text_style}>nasa_jpl_url : {this.state.asteroid_data.nasa_jpl_url}</Text>
          <Text style={styles.text_style}>is_potentially_hazardous_asteroid : {this.state.asteroid_data.is_potentially_hazardous_asteroid?"YES":"NO"}</Text>

            </View>
    )
  }
}

const styles = StyleSheet.create({

    text_style:{
        fontSize:20
    },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default DetailScreen;
