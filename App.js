/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import CustomStatusBar from './src/components/CustomStatusBar';
import {API_GET} from './src/endpoints';
import {isInernetConnected} from './src/helper';
import APP_COLORS from './src/helper/Color';
import CONSTANTS from './src/helper/Constants';
import STRINGS from './src/localization';
import NetInfo from '@react-native-community/netinfo';
import NoInternet from './src/components/NoInternet';
let unsubscribe = null;
const App = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [connectvityStatus, setConnectivity] = useState(true);

  useEffect(() => {
    console.log('I am running');
    unsubscribe = NetInfo.addEventListener((state) => {
      setConnectivity(state.isConnected);
    });
    isInernetConnected()
      .then((status) => {
        if (status.isConnected) {
          API_GET('posts')
            .then((posts) => {
              if (posts && posts.length > 0) {
                setPosts(posts);
              }
            })
            .catch((error) => {
              setError(true);
            });
        } else {
          setError(true);
        }
      })
      .catch((error) => {});
    //
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_COLORS.PRIMARY_COLOR,
      }}>
      <CustomStatusBar
        backgroundColor={connectvityStatus ? APP_COLORS.PRIMARY_COLOR : 'red'}
      />
      {!error && posts.length > 0 ? (
        <Text>
          {' '}
          {STRINGS.WELCOME} {CONSTANTS.APP_NAME}
        </Text>
      ) : (
        <Text>{error ? CONSTANTS.ERROR : STRINGS.LOADING}</Text>
      )}
      <NoInternet />
    </View>
  );
};
export default App;
