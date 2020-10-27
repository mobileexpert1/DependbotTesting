import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import CONSTANTS from '../../helper/Constants';
import GLOBAL_STYLES from '../../helper/GlobalStyles';
import SPLASH_STYLES from './Style';
import {SafeAreaView} from 'react-native-safe-area-context';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('root');
    }, CONSTANTS.SPLASH_TIMEOUT);
  });
  return (
    <SafeAreaView style={[GLOBAL_STYLES.CONTAINER]}>
      <View style={SPLASH_STYLES.INNER_CONTAINER}>
        <Text>Splash screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
