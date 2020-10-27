import React from 'react';
import {StatusBar} from 'react-native';
import APP_COLORS from '../helper/Color';
const CustomStatusBar = (props) => {
  return (
    <StatusBar
      backgroundColor={
        props.backgroundColor ? props.backgroundColor : APP_COLORS.PRIMARY_COLOR
      }
    />
  );
};
export default CustomStatusBar;
