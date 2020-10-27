import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from '../../App';
import SplashScreen from '../screens/Splash';
import {useState} from 'react';
import WelcomeScreen from '../screens/Welcome/Welcome';
import SignupScreen from '../screens/Signup';
import CartScreen from '../screens/Cart';
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="signup"
      component={SignupScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="cartscreen"
      component={CartScreen}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <Stack.Screen name="root" component={App} options={{headerShown: false}} />
  </HomeStack.Navigator>
);
function Routes() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}
      {isUserLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

export default Routes;
