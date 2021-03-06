/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import axios from "axios";
import { Card } from "./Card";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }

    this.getUsers = this.getUsers.bind(this);

  }


  componentDidMount() {
    this.getUsers();

  }

  getUsers = () => {
    axios
      .get("https://swapi.co/api/people")
      .then(data => {
        console.log("res", data.data.results[2]);
        this.setState({ users: data.data.results, 
          ajaxCallState: 200, 
          errorMessage: null, });
      }
      )
      .catch(err => {
        console.log(err);
        this.setState({
          ajaxCallState: "Network error",
          errorMessage: err.message
        });
        return null;
      });
  };

  render() {
    
    return (
    
      <SafeAreaView>
         <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>

      <View style={styles.container}>
        <Text>Swapi Api Call</Text>
        
                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Name</Text>
                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    
                    {this.state.users[0].name}
                    
                    </Text>
                    :null}
                </Card>
                

                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Height</Text>

                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    {this.state.users[1].height}
                    </Text>
                    :null}
                </Card>

                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Mass</Text>

                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    {this.state.users[2].mass}
                    </Text>
                    :null}
                </Card>

                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Skin Color</Text>
                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    {this.state.users[3].skin_color}
                    </Text>
                    :null}
                </Card>

                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Eye Color</Text>
                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    {this.state.users[6].eye_color}
                    </Text>
                    :null}
                </Card>

                <Card style={styles.cardStyle}>
                    <Text style={styles.cardTitle}>Gender</Text>
                    {this.state.users.length > 0 ?
                    <Text style={{ padding: 10 }}>
                    {this.state.users[7].gender}
                    </Text>
                    :null}
                </Card>
            </View>
            </ScrollView>
            </SafeAreaView>
    
   
    )
  }
}




const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 50,
  },
  cardStyle: {
      margin: 20,
  },
  cardTitle:{
      padding:10,
      fontSize:20,
      alignItems: "center",
      justifyContent: "center"
  }
});