import React, {useState, useEffect} from 'react';
import {
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

      useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
          }, 5000);
        }, []);
     return (
        <Button
              title="Goin"
              onPress={() =>
                navigation.navigate('DrawerInclude',)
              }
            />
      );
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#dc4e41',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 5,
    },
   buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
     buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
      },
  },
);