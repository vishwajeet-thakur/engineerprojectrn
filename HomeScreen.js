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
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

var api_key = "qDhff0APLvzJ0edwNVwqxNB5rvdKkXAOeJ5xCpeT";
class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            asteroid_id: ''
        }
    }

    getAsteroidData = (asteroid_id) => {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/' + asteroid_id + '?api_key=' + api_key)
            .then(res => res.json())
            .then(response => {
                console.log("Name : " + response.name)
                this.props.navigation.navigate('Detail', { api_data: response })
            }).catch((error) => {
                console.log(error);
                Alert.alert("","No Data Found");
            })
    }

    getRandomAsteroidID = () => {
        fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + api_key)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                var page_size = response.page.size;
                var random_index = Math.floor(Math.random() * Math.floor(page_size - 1));
                console.log(random_index);
                 this.getAsteroidData(response.near_earth_objects[random_index].id)
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder='Enter Asteroid ID'
                    style={{ margin: 10 }}
                    onChangeText={(text) => this.setState({
                        asteroid_id: text
                    })}
                >

                </TextInput>

                <TouchableOpacity
                    style={styles.obj_style}
                    disabled={this.state.asteroid_id.trim() === ""?true:false}
                    onPress={() => {
                        if (this.state.asteroid_id.trim() !== "") {
                            this.getAsteroidData(this.state.asteroid_id)
                        }
                    }}
                >
                    <Text style={{ textAlign: "center", color: 'white' }}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.obj_style}
                    onPress={() => {
                        this.getRandomAsteroidID()
                    }}
                >
                    <Text style={{ textAlign: "center", color: 'white' }}>Random Asteroid</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    obj_style: {
        margin: 10,
        backgroundColor: 'blue',
        padding: 10,
        justifyContent: "center"

    }
});

export default HomeScreen;
