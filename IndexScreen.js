import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
} from 'react-native';


const IndexScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>About Us</Text>
    <Text style={styles.dev}>Developer</Text>
    <Text style={styles.main}>이경민</Text>
    <Text style={styles.submain}>한국과학기술원 재학</Text>
    <Text style={styles.main}>김선효</Text>
    <Text style={styles.submain}>숙명여자대학교 재학</Text>
    <Text style={styles.dev}>Tool</Text>
    <Text style={styles.submain}>React-Native 0.63.4</Text>
  </View>
  );
  };
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        color: 'blue',
        fontWeight:'bold',
        fontSize: 30,
        textDecorationLine: "underline",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 10
    },
    dev:{
         flex: 1,
         color:'black',
         fontWeight:"normal",
         fontSize: 27,
         textDecorationLine: "underline",
         textShadowColor: 'rgba(0, 0, 0, 0.75)',
           textShadowOffset: {width: -1, height: 1},
           textShadowRadius: 10
    },
    main:{
        flex: 0.5,
        color:'black',
        fontWeight:"normal",
        fontSize: 25,
        lineHeight: 30,
    },
    submain:{
            flex: 1,
            color:'black',
            fontWeight:"normal",
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 30,
        }
})
export default IndexScreen;



