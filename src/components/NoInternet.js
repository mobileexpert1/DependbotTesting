/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
let unsubscribe = null;

const NoInternet = (props) => {
  const [connectvityStatus, setConnectivity] = useState(true);
  useEffect(() => {
    unsubscribe = NetInfo.addEventListener((state) => {
      setConnectivity(state.isConnected);
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  return !connectvityStatus ? (
    <View style={STYLE.CONTAINER}>
      <Text style={{padding: 10}}>No Internet</Text>
    </View>
  ) : null;
};
export default NoInternet;
const STYLE = StyleSheet.create({
  CONTAINER: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'red',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
