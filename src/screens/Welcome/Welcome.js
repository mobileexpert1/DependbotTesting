/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CONSTANTS from '../../helper/Constants';
import GLOBAL_STYLES from '../../helper/GlobalStyles';
import WELCOME_STYLES from './Style';
import {SafeAreaView} from 'react-native-safe-area-context';
import InstagramLogin from 'react-native-instagram-login';
// import LinkedInModal from 'react-native-linkedin';
import {useState} from 'react';
import IMAGES from '../../helper/Images';
import END_POINTS from '../../endpoints/endpoint';
import {
  getAsyncStorage,
  setAsyncStorage,
  clearAsyncStorage,
} from '../../controller/AsyncstorageController';
import AppLoader from '../../components/AppLoader';
import CustomStatusBar from '../../components/CustomStatusBar';
import NoInternet from '../../components/NoInternet';

const WelcomeScreen = ({navigation}) => {
  const [, setIgToken] = useState('');
  const [, setIgUserID] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const instagramRef = useRef(null);
  const linkedinmRef = useRef(null);

  useEffect(() => {
    getAsyncStorage(CONSTANTS.OBJ_USER_DETAIL).then((userDetails) => {
      if (userDetails) {
        let userDetail = JSON.parse(userDetails);
        const {isLogin} = userDetail;
        setLoggedIn(isLogin);
      }
    });
  });
  function loginSuccess(data) {
    setLoading(true);
    const {access_token, user_id} = data;
    setIgToken(access_token);
    setIgUserID(user_id);

    fetch(
      END_POINTS.INSTAGRAM_USER_DETAILS +
        'fields=id,username,ig_id&access_token=' +
        access_token,
    )
      .then((resopnse) => resopnse.json())
      .then((instgramDetails) =>
        instgramDetails
          ? userDetailFetchedSuccessfully(CONSTANTS.INSTAGRAM, instgramDetails)
          : setLoading(false),
      )
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function userDetailFetchedSuccessfully(socialLoginType, userDetails) {
    let userDetail = {isLogin: 1, socialLoginType: socialLoginType};
    setLoading(false);
    switch (socialLoginType) {
      case CONSTANTS.INSTAGRAM:
        const {username, ig_id} = userDetails;
        let instaName = username ? username : ig_id;
        let message = 'Hi, Welcome ' + instaName + ' in ' + CONSTANTS.APP_NAME;
        alert(message);
        setAsyncStorage(CONSTANTS.OBJ_USER_DETAIL, userDetail, true);
        setLoggedIn(true);
        return;
      default:
        return;
    }
  }
  function loggedOut() {
    setLoading(true);
    clearAsyncStorage(CONSTANTS.OBJ_USER_DETAIL);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(false);
    }, 2000);
  }
  return (
    <SafeAreaView style={[GLOBAL_STYLES.CONTAINER]}>
      <CustomStatusBar />
      <View style={WELCOME_STYLES.INNER_CONTAINER}>
        {!isLoggedIn ? <Text>WelcomeScreen</Text> : null}
        {isLoggedIn ? (
          <Text style={{padding: 20}} onPress={loggedOut}>
            Logout
          </Text>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => instagramRef.current.show()}
              style={{padding: 5}}>
              <Image
                style={{width: 50, height: 50}}
                source={IMAGES.LOGO_INSTA}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => linkedinmRef.current.open()}
              style={{padding: 5}}>
              <Image
                style={{width: 50, height: 50}}
                source={IMAGES.LOGO_LINKEDIN}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <InstagramLogin
        ref={(ref) => (instagramRef.current = ref)}
        appId={CONSTANTS.INSTA_APP_ID}
        appSecret={CONSTANTS.INSTA_APP_SECERET}
        redirectUrl={CONSTANTS.INSTA_REDIRECT_URL}
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={loginSuccess}
        onLoginFailure={(data) => console.log(data)}
      />
      {/* <LinkedInModal
        ref={(ref) => (linkedinmRef.current = ref)}
        clientID="[ Your client id from https://www.linkedin.com/developer/apps ]"
        clientSecret="[ Your client secret from https://www.linkedin.com/developer/apps ]"
        redirectUri="[ Your redirect uri set into https://www.linkedin.com/developer/apps ]"
        onSuccess={(token) => console.log(token)}
      /> */}
      <AppLoader visible={loading} />
      <NoInternet />
    </SafeAreaView>
  );
};
export default WelcomeScreen;
