import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// import Torch Component
import Torch from 'react-native-torch';

const FlashLightScreen = () => {
  //Default Keep Awake off
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          Turn on/off Flashlight to Make a Torch App in React Native
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={handlePress}>
          <Text style={styles.buttonTextStyle}>
            {isTorchOn ? 'Turn off the Torch' : 'Turn on the Torch'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlashLightScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: 'black',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
